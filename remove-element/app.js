// const removeElement = (array, number) => {
//     if(array.length <= 100) {
//         /**
//          * Función filter: Crea un nuevo arreglo con los elementos que cumplan
//          * una condición
//          */
//         // array = array.filter(item => item !== number);
    
//         /**
//          * Método splice cambia el contenido de una serie eliminando elementos
//          * existentes y/o agregando nuevos elementos.
//          */
//         // for (let i = 0; i < array.length; i++) {
//         //     if(array[i] === number) {
//         //         array.splice(i,1);
//         //     }//end if
//         // }//end for i
    
//         /**
//          * Mi método
//          */
//         let result = '';
//         for (let i = 0; i < array.length; i++) {
//             if(array[i] !== number) {
//                 result += array[i];
//             }//en if
//         }//end for i
    
//         array = [];
//         for (let i = 0; i < result.length; i++) {
//             array.push(parseInt(result[i]));
//         }//end for
        
//         return array;
//     }//end if
// };//end removeElement


const removeElement = (nums, val) => {
    if(nums.length <= 100) {
        /**
         * Función filter: Crea un nuevo arreglo con los elementos que cumplan
         * una condición
         */
        // nums = nums.filter(item => item !== val);
    
        /**
         * Método splice cambia el contenido de una serie eliminando elementos
         * existentes y/o agregando nuevos elementos.
         */
        // for (let i = 0; i < nums.length; i++) {
        //     if(nums[i] === val) {
        //         nums.splice(i,1);
        //     }//end if
        // }//end for i
    
        /**
         * Mi método
         */
        let result = '';
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                result += nums[i];
            }//en if
        }//end for i
    
        nums = [];
        for (let i = 0; i < result.length; i++) {
            nums.push(parseInt(result[i]));
        }//end for
        
        return nums;
    }//end if
};//end removeElement


console.log(removeElement([3,2,2,3], 3));