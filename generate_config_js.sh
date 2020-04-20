#!/bin/sh -eu
if [ -z "${BACKEND_URL:-}" ]; then
    BACKEND_URL="http://localhost:9080"
fi
 
cat <<EOF
window.REACT_APP_API_URL='$BACKEND_URL';
EOF