# Generated by Django 4.1.7 on 2023-04-24 06:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Entity', '0011_user_address_user_phonenumber'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='Address',
        ),
        migrations.RemoveField(
            model_name='user',
            name='PhoneNumber',
        ),
    ]
