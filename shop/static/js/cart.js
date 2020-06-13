
//find out the cart items from the local storage
if(localStorage.getItem('cart')==null)
    {
        var cart = {}
    }
else
    {
        cart = JSON.parse(localStorage.getItem('cart'))
        updatecart(cart)
    }


//if add to cart is clicked, add/increment the item
//$('.cart').click(function(){
$('.divpr').on('click', 'button.cart', function(){
var idstr = this.id.toString()
if(cart[idstr]!= undefined)
    {
        cart[idstr] = cart[idstr] + 1;
    }
else
    {
        cart[idstr] = 1;
    }
updatecart(cart)
});


function clearCart()
{
    cart = JSON.parse(localStorage.getItem('cart'))
    for(var item in cart)
    {
        document.getElementById('div' + item).innerHTML = '<button id="'+ item +'" class="btn btn-primary cart">Add To Cart</button>'
    }
    localStorage.clear();
    cart = {}
    updatecart(cart)
}

function updatecart(cart)
{
    var sum=0;
    for(var item in cart)
    {
        document.getElementById('div'+item).innerHTML = "<button id='minus" + item + "' class='btn btn-primary minus'>-</button> <span id='val"+ item +"''>" + cart[item] + "</span> <button id='plus"+ item +"' class='btn btn-primary plus'> + </button>";
        sum = sum + cart[item]
    }

localStorage.setItem('cart', JSON.stringify(cart))
document.getElementById('cart').innerHTML = sum;
updatePopOver(cart)
}

// Add popover to cart

$('#popcart').popover()
updatePopOver(cart)
function updatePopOver(cart)
{

    console.log('we are in update popover')
    var popStr = ""
    popStr = popStr + "<h5>Cart for your items in shopping cart</h5><div class='col mx-2 my-2'>"
    var i=0;
    for(var item in cart)
    {
        popStr = popStr + "<b>" + i + "</b>. "
        popStr = popStr + document.getElementById('name'+ item).innerHTML.slice(0,19) + "....Qty: " + cart[item] + "</br>"
        i = i+1

    }
    popStr = popStr + "</div><a href = '/shop/checkout'><button class='btn btn-primary' id='checkout'>Checkout</button></a><button class='btn btn-primary' onclick='clearCart()' id='clearCart'>ClearCart</button>"
    document.getElementById('popcart').setAttribute('data-content', popStr)
    $('#popcart').popover('show')

}

// if plus or minus button is clicked, change the cart as well as display value
$('.divpr').on("click", "button.minus", function()
{
    a = this.id.slice(7, )
    cart['pr' + a] = cart['pr' + a] - 1;
    cart['pr' + a] = Math.max(0, cart['pr' + a])
    document.getElementById('valpr' + a).innerHTML = cart['pr' + a]
    updatecart(cart)
});
$('.divpr').on("click", "button.plus", function()
{
    a = this.id.slice(6, )
    cart['pr' + a] = cart['pr' + a] + 1;
    document.getElementById('valpr' + a).innerHTML = cart['pr' + a]
    updatecart(cart)
});