numToSum = process.argv.length-2;
valueToCalc = process.argv;
if(numToSum!==1) {
    let result=0;
    for (i=0; i<numToSum;i++) {
        j=i+2;
        result+=parseInt(valueToCalc[j]);
    }
    console.log(result);
}
else {
    console.log('There is not enought number')
}