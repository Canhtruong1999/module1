function quadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    let root1;
    let root2;
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`nghiệm là ${root1} and ${root2}`);
    } else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        console.log(`nghiệm là ${root1} and ${root2}`);
    } else {
       console.log('vô nghệm')
    }
}
quadratic(8, 12, -20);