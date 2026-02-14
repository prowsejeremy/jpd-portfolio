#!/bin/bash
# This script sets up a systemd timer to automatically renew SSL certificates using certbot on the

# NOTE: This script isn't currently working as expected,
# so use it as a guide of what to create manually on the EC2 instance for now.

# Ensure you've set the following environment variables in connection_variables.sh:
SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
source $SCRIPT_DIR/connection_variables.sh
source $SCRIPT_DIR/print_message.sh

ssh -i $EC2_KEY_PATH $EC2_USER@$EC2_HOST <<OUTER_EOF
  set -e;

  echo ""
  echo "================================"
  echo "📄 Configure the timer service"
  echo "================================"
  echo ""
  if [ ! -f /etc/systemd/system/certbot-renew.service ]; then
    sudo cat <<INNER_EOF > /etc/systemd/system/certbot-renew.service
      [Unit]
      Description=Renew certificates

      [Service]
      Type=oneshot
      ExecStart=cd /home/ec2-user/jpd-portfolio && docker compose run --rm certbot renew --standalone --pre-hook "docker compose stop nginx" --post-hook "docker compose start nginx" --quiet;
    INNER_EOF
  fi

  echo ""
  echo "========================="
  echo "📄 Configure the timer"
  echo "========================="
  echo ""
  if [ ! -f /etc/systemd/system/certbot-renew.timer ]; then
    sudo cat <<INNER_EOF > /etc/systemd/system/certbot-renew.timer
      [Unit]
      Description=Timer to renew certificates

      [Timer]
      OnCalendar=weekly
      Persistent=true

      [Install]
      WantedBy=timers.target
    INNER_EOF
  fi

  # Enable and start the timer
  echo ""
  echo "================================"
  echo "⏱️ Enable and start the timer"
  echo "================================"
  echo ""
  sudo systemctl enable certbot-renew.timer
  sudo systemctl start certbot-renew.timer

  echo ""
  echo "============================================================"
  echo "✅ Timer and service successfully spawned. Current status:"
  echo "============================================================"
  echo ""

  sudo systemctl status certbot-renew.timer --no-pager

  exit 0;
OUTER_EOF

[[ $? -ne 0 ]] && { printmessage "❌ Failed to set up certbot renewal timer."; exit 1; }

printmessage "✅ Certbot renewal timer set up successfully."

exit 0;