curl https://api.intercom.io/contacts \
-XPOST \
-u r5un7swa:e81ab7fc5a72a750b37f450172a25db919f0de50 \
-H 'Accept: application/json' \
-H 'Content-Type: application/json' -d'
{
  "email": "winstonsmith@truth.org",
  "name": "Winston Smith",
  "last_seen_ip" : "1.2.3.4",
  "last_seen_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9",
  "custom_attributes": {
    "paid_subscriber" : true,
    "monthly_spend": 155.5,
    "team_mates": 9
  },
  "companies": [
    {
      "company_id" : "366",
      "name" : "Serenity",
      "monthly_spend" : 500
    }
  ]
}'