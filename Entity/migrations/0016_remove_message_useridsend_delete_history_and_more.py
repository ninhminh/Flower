# Generated by Django 4.2.1 on 2023-05-13 03:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Entity', '0015_remove_order_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='message',
            name='UserIDSend',
        ),
        migrations.DeleteModel(
            name='History',
        ),
        migrations.DeleteModel(
            name='Message',
        ),
    ]
