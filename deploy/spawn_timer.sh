#!/bin/bash
# This script sets up a systemd timer to automatically renew SSL certificates using certbot on the

# Ensure you've set the following environment variables in connection_variables.sh:
SCRIPT_DIR="$(dirname "$(realpath "${BASH_SOURCE[0]}")")"
source $SCRIPT_DIR/connection_variables.sh
source $SCRIPT_DIR/print_message.sh

ssh -i $EC2_KEY_PATH $EC2_USER@$EC2_HOST <<EOF
  set -e;

  sudo if [ ! -f /etc/systemd/system/certbot-renew.service ]; then
  cat <<EOF > /etc/systemd/system/certbot-renew.service
    [Unit]
    Description=Renew certificates

    [Service]
    Type=oneshot
    ExecStart=cd /home/ec2-user/jpd-portfolio && docker compose run --rm certbot renew --standalone --pre-hook "docker compose stop nginx" --post-hook "docker compose start nginx" --quiet
  EOF
  fi

  sudo if [ ! -f /etc/systemd/system/certbot-renew.timer ]; then
  cat <<EOF > /etc/systemd/system/certbot-renew.timer
    [Unit]
    Description=Timer to renew certificates

    [Timer]
    OnCalendar=weekly
    Persistent=true

    [Install]
    WantedBy=timers.target
  EOF
  fi

  # Enable and start the timer
  sudo systemctl enable certbot-renew.timer
  sudo systemctl start certbot-renew.timer

  exit 0;
EOF

[[ $? -ne 0 ]] && { printmessage "❌ Failed to set up certbot renewal timer."; exit 1; }

printmessage "✅ Certbot renewal timer set up successfully."

exit 0;