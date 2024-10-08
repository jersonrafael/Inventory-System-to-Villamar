# Generated by Django 4.2.16 on 2024-09-30 19:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clients', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('code', models.IntegerField()),
                ('price', models.FloatField()),
                ('added_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('expiration_date', models.DateField(blank=True, null=True)),
                ('avaliable', models.BooleanField(default=True)),
                ('product_date', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('units', models.CharField(max_length=255)),
                ('quantity', models.IntegerField()),
                ('sale_date', models.DateTimeField(auto_now=True)),
                ('client', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='clients.client')),
                ('product', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]
