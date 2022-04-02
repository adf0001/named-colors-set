
// named-colors-set @ npm, named-colors set.

//list
var list = "aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen"
	.split(",");

list.sort();

//keys
var keys = "alice,almond,antique,aqua,aquamarine,azure,beige,bisque,black,blanched,blue,blush,brick,brown,burly,cadet,chartreuse,chiffon,chocolate,coral,corn,cream,crimson,cyan,dark,deep,dew,dim,dodger,drab,fire,floral,flower,forest,fuchsia,gainsboro,ghost,gold,golden,gray,green,grey,honey,hot,indian,indigo,ivory,khaki,lace,lavender,lawn,lemon,light,lime,linen,magenta,marine,maroon,medium,mid,mint,misty,moccasin,navajo,navy,night,old,olive,orange,orchid,pale,papaya,peach,peru,pink,plum,powder,puff,purple,rebecca,red,rod,rose,rosy,royal,saddle,salmon,sandy,sea,shell,sienna,silk,silver,sky,slate,smoke,snow,spring,steel,tan,teal,thistle,tomato,turquoise,violet,wheat,whip,white,wood,yellow"
	.split(",");

keys.sort();

//module

exports.list = list;
exports.keys = keys;
