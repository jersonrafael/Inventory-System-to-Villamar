# Generated by Django 4.2.16 on 2024-09-29 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('lastName', models.CharField(max_length=255)),
                ('identification', models.CharField(max_length=300)),
                ('direction', models.CharField(max_length=255)),
                ('client_date', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
