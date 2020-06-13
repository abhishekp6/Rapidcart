from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Product, Contact
from math import ceil
from .forms import NewContactForm
# Create your views here.

def index(request):
    #products = Product.objects.all()
    #print(products)
    #n = len(products)
    #nSlides = n//4 + ceil((n/4)-(n//4))
    allprods = []
    catprods = Product.objects.values('category', 'id')
    cats = {item['category'] for item in catprods}
    for cat in cats:
        prod = Product.objects.filter(category=cat)
        n = len(prod)
        nSlides = n//4 + ceil((n/4)-(n//4))
        allprods.append([prod, range(1, nSlides), nSlides])
    #params = {'no_of_slides':nSlides, 'range':range(1,nSlides), 'product':products}
    params = {'allprods':allprods}
    return render(request, 'shop/index.html', params)


def about(request):
    return render(request, 'shop/about.html')

def contact(request):
    if request.method == 'POST':
        form = NewContactForm(request.POST)
        if form.is_valid():
            form.save()
            form = NewContactForm()
    else:
        form = NewContactForm()
        
    return render(request, 'shop/contact.html', {'form':form})


def tracker(request):
    return render(request, 'shop/tracker.html')


def search(request):
    return render(request, 'shop/search.html')


def productView(request, myid):
    #Fetch product using id

    product = Product.objects.filter(id=myid)
    return render(request, 'shop/prodview.html', {'product':product[0]})


def checkout(request):
    return render(request, 'shop/checkout.html')