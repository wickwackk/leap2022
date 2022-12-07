let n = 2;
let prime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    prime = false;
    break;
  }
}

if (prime == true) {
  console.log("Yes");
} else {
  console.log("No");
}
