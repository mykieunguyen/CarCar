# Generated by Django 4.0.3 on 2023-08-02 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory_rest', '0004_automobile_dealer_price_automobile_mileage_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobile',
            name='is_favorite',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
