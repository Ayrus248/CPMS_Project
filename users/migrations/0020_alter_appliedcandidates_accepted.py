# Generated by Django 5.0.4 on 2024-05-16 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0019_alter_appliedcandidates_accepted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appliedcandidates',
            name='accepted',
            field=models.BooleanField(default=False),
        ),
    ]
