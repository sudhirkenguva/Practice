// Rotate Right
let a = [1,2,3,4,5,6,7];
console.log('Original Array',a);
let n = 3; // rotate by 2 positions
console.log('Rotation Offset',n);
let temp = [];
let a_len = a.length-1; // 6
for(let i=n; i>0; i--) {
temp.unshift(a[a_len--]);
}

for(let i=a.length-1-n; i>=0;i--) {
    a[i+n] = a[i]; 
}

for(let i=0;i<n;i++) {
    a[i] = temp[i];
}
console.log('New Array',a);