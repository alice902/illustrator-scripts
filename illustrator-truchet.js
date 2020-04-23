object = app.active.Document.selection];

for(j=0; j<10; j++)
{
	for(i=0; i<10; i++)
	{
		newobject. = object.duplicate();
		newobject.translate(object.width*(i+1),object.height(j+1));
		newobject.rotate(Math.floor(Math.random()*4)*90);
	}
}
