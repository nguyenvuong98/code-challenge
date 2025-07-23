//Complexity: Time: O(1) (constant time), Space: O(1)
//Efficiency: Most efficient method for this task. No iteration or recursion; extremely fast and memory-efficient.
function sum_to_n1(n: number): number {
  return (n * (n + 1)) / 2;
}

//Complexity: Time: O(1) (constant time), Space: O(1)
//Efficiency: Simple and readable. Slower than the formula for large n, but still efficient in most use cases. Best when you want to track intermediate states or perform side effects.
function sum_to_n2(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
//Complexity: Time: O(1) (constant time), Space: O(1) (due to call stack)
//Efficiency: Conceptually elegant and concise. Less efficient in practice due to recursive call overhead and stack growth. Not recommended for large n (risk of stack overflow).
function sum_to_n3(n: number): number {
  if (n <= 1) return n;
  return n + sum_to_n3(n - 1);
}

const main = () => {
    console.log('Problem 4: Three ways to sum to n')
    console.time('solution_1')
    const opt1 = sum_to_n1(99)
    console.timeEnd('solution_1')
    console.log('Result solution 1', opt1)

    console.time('solution_2')
    const opt2 = sum_to_n2(99)
    console.timeEnd('solution_2')
    console.log('Result solution 2', opt2)

    console.time('solution_3')
    const opt3 = sum_to_n3(99)
    console.timeEnd('solution_3')
    console.log('Result solution 3', opt3)
}
main();