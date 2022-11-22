// A $( document ).ready() block.
$( document ).ready(function() {
    $("#form1").submit(function (e){
        e.preventDefault();
        window.scrollTo(0, 0);
        $("#divAlert").removeClass("d-none");

        const nama = $("#inputNama").val();
        $("#alertText").html("Terima kasih " + nama + ", Link sudah dapat dilihat di email anda")
    });

    $("#buttonClose").click(function (){
        $("#divAlert").addClass("d-none");
    });
    
    $("#btnSubmit").click(function(e){
        e.preventDefault();
        $("#alertaja").removeClass("d-none");
        $("#idform").addClass("d-none");
       const fn = $("#firstName").val();
       const ln = $("#lastName").val();
       const fln = fn + ln;
       const almt = $("#alamat").val();
    //    $("#alert1").html("<h1>Terima kasih " + fn + "  " + ln + </h1>"\n barang akan dikirim ke " + almt +" secepatnya!");
       $("#alert1").html(`<h4><strong>Terima kasih ${fln}</strong></h4>`);
       $("#alert2").html(`<p>Paket akan dikirim ke ${almt}</p>`);

        
       
    });
    $("#cangkir").click(function(e) {
             e.preventDefault();
             window.scrollTo(0, 0);
             const varcangkir= $("#cangkir").attr("src");
             $("#utama").attr("src", varcangkir);
         });

         $("#cangkir").click(function(e) {
            e.preventDefault();
            const varcangkir= $("#cangkir").attr("src");
            window.scrollTo(0, 0);
            $("#utama").attr("src", varcangkir)
        });
    
        $("#saman").click(function(e) {
            e.preventDefault();
            const varsaman= $("#saman").attr("src");
            window.scrollTo(0, 0);
            $("#utama").attr("src", varsaman)
        });
    
        $("#lino").click(function(e) {
            e.preventDefault();
            const varlino= $("#lino").attr("src");
            window.scrollTo(0, 0);
            $("#utama").attr("src", varlino)
        });
    
        $("#syail").click(function(e) {
            e.preventDefault();
            const varsyail= $("#syail").attr("src");
            window.scrollTo(0, 0);
            $("#utama").attr("src", varsyail)
        });
});



// $("#btnSubmit").click(function (e){
//     // e.preventDefault();
//     // window.scrollTo(0, 0);
//     $("#alertaja").removeClass("d-none");

//     const nama = $("#inputNama").val();
//     $("#alert1").html("Terima kasih " + nama + ", Link sudah dapat dilihat di email anda")
// });

// $("#buttontutup").click(function (){
//     // $("#alertaja").addClass("d-none");
// });




// Click Foto

   