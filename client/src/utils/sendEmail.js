export default function sendEmail() {
  console.log("testinggg email")
  fetch("/testing")
    .then(res => res.json())
    .then(data => console.log(data))
}