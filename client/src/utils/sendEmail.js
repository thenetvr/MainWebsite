export default function sendEmail(email) {
  console.log(email)
  fetch("/testing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
}