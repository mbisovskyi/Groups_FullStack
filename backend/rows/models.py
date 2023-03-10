from django.db import models
from groups.models import Group
from groups.models import User

# Create your models here.
class Row(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=24, blank=False, null=False)
    last_name = models.CharField(max_length=48, blank=False, null=False)
    phone = models.CharField(max_length=256, null=False)
    lambs_quantity = models.DecimalField(null=False, max_digits=3, decimal_places=1, default=0.0)
    pigs_quantity = models.DecimalField(null=False, max_digits=3, decimal_places=1, default=0.0)
    bread_quantity = models.DecimalField(null=False, max_digits=3, decimal_places=1, default=0.0)

    def __str__(self):
        return f"Group: (id - {self.group.id}, date - {self.group.date}); Row: (id - {self.id}, Customer - {self.first_name.capitalize()} {self.last_name.capitalize()})"