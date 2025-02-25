# Generated by Django 3.2.25 on 2024-07-22 05:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContentGuidelines',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('guideline_text', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='CulinaryCertification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('certification_name', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
    ]
