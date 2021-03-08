document.forms[0].oninput = function() { 
    var colors = ['red','orange','yellow','lime','aqua', 'violet']; 
    var slices = []; var values = []; 
    var percents = [0]; var n = 0; 
    var lengthz = document.forms[0].length-1;
    var totalz = 0;
    for(var z = 0; z < lengthz; z++)
    {
    totalz += parseFloat(document.forms[0].elements[z].value); 
    values.push(document.forms[0].elements[z].value);
    }    
    
    for (var zz = 0; zz < lengthz; zz++)
    {
    percents.push(document.forms[0].elements[zz].value/totalz*100);
    n += percents[zz]; 
    slices.push('<circle cx="50%" cy="50%" r="16" stroke="' + colors[zz] + '" stroke-dasharray="'+ percents[zz+1].toFixed(2) +' 100" stroke-dashoffset="-'+n.toFixed(2)+'"></circle>');
    }
    var h = document.querySelector('svg');
    var svgstring = slices.join("");
    h.innerHTML = svgstring;
    result.value = totalz;
    }  
    document.forms[0].oninput();