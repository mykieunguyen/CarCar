# Generated by Django 4.0.3 on 2023-07-25 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0007_alter_appointment_date_alter_appointment_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='time',
            field=models.TimeField(auto_now_add=True, null=True),
        ),
    ]
