

$("#add_inventory").submit(function(event){
    alert("Create a new inventory successfully!");
})

$("#add_shipment").submit(function(event){
    alert("Create a new shipment successfully!");
})

$("#update_inventory").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {};

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value'];
    })

    var request = {
        "url": `http://localhost:3000/api/inventory/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Update inventory successfully!");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id");

        var request = {
            "url": `http://localhost:3000/api/inventory/${id}`,
            "method": "DELETE"
        }

        if(confirm("Are you sure you want to delete?")){
            $.ajax(request).done(function(response){
                alert("Delete inventory successfully!");
                location.reload();
            })
        }
    })
}