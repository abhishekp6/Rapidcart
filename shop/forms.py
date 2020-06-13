from django import forms
from .models import Contact

class NewContactForm(forms.ModelForm):
    #msg_id = forms.AutoField(primary_key = True)
    name = forms.CharField(max_length=50, widget=forms.TextInput(attrs={"class":"form-control","placeholder":"Name"}))
    email = forms.EmailField(max_length=70, widget=forms.TextInput(attrs={"class":"form-control","placeholder":"Email"}))
    phone = forms.CharField(max_length=12, widget=forms.TextInput(attrs={"class":"form-control","placeholder":"Phone"}))
    desc = forms.CharField(max_length=500, widget=forms.Textarea(attrs={"class":"form-control", "placeholder":"Write Your Query"}))
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone', 'desc']
