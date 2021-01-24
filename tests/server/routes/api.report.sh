#!/bin/sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -H "X-Api-Key: secret" \
  -d '{"id":"b3875623-e96a-4cf0-9d6d-828331bda025","status":"accepted","duration":60,"startedAt":"2017-12-14T17:32:11.423Z","stoppedAt":"2017-12-14T18:16:02.523Z","score":75}' \
  https://demo-proctoredu.ddns.net/api/report
