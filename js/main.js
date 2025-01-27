$(()=>
{
    $( "body > span" ).hide( 0 ) ; 
    $( "#header > a:not(:first-child)" ).hide( 0 ) ; 
    $( "#header > svg" ).on( "click" , ()=>{ console.log( "hi" ) ; } ) ; 
});
