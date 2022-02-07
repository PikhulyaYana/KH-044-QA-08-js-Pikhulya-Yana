console.log([1, 3, 4, 5, 7, 16].filter(number => !(number % 2))
.reduceRight((accumulator, number) => accumulator + Math.sqrt(number), 0)); 





