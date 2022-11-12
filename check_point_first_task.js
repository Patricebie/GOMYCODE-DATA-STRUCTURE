function scalar (vector_u, vector_v, cosinus){
    return (Math.abs(vector_u) * Math.abs(vector_v)) * Math.cos(cosinus);
}
let vector_u = prompt('Enter the vector U');
let vector_v = prompt('Enter the vector V');
let cosinus = prompt('Enter the vector Cosinus0');
if (scalar(vector_u, vector_v, cosinus) == 0){
    console.log('the vector is orthogonal')
} else {
    console.log("the vector isn't orthogonal");
}