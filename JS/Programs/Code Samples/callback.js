function ABC(temp)
{
  temp();
};

for (var i = 0; i <= 5; i++)
{
  ABC(function () {
    console.log(i);
  });
}