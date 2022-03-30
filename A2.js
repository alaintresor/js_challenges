const  palindrome=(ward)=>{
   let wardLetters=ward.split('');
   let newWard='';
   for(let i=wardLetters.length-1;i>=0;i--)
   {
        newWard+=wardLetters[i];
   }
   if(ward.toLowerCase()==newWard.toLowerCase())
   {
       return true
   }
   else 
   {
       return false
   }
}
console.log(palindrome("refer"))