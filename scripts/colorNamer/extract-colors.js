/*---------------*/
/*
 color: #1111;
 */
var patt1 = /#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,\s*){3}[\d\.]+\)|hsl\(\s*\d+\s*(\s*\,\s*\d+\%){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*\%){2}\s*\,\s*[\d\.]+\)/gm;
var testCss = '"#0D2E1C", "#2F4F4F", "#4F9D5D", "#FFFF31", "#7FFFD4", "#FFEFC1"';
var outColor = getTextColor(testCss, patt1);

function getTextColor(string, patt1) {
  return string.match(patt1)
}
function remove_duplicates_es6(arr) {
  let s = new Set(arr);
  let it = s.values(); // returns elements in insertion order
  console.log('it',it);
  return Array.from(it);
}



function addText(e) {
  var tarea = $('textarea'),
    tval = "$white-70: rgba(255, 255, 255, 0.7);\n $s1:  rgba(200, 224, 213, 0.32);\n$p1a: #158cd2;\n $p1b: #2a7cc7;\n $s1b: #a61f84;\n $s1a: #ba1079;\n $p1-90: rgb(0, 155, 222);\n $steel-20: rgba(118, 134, 146, 0.2);\n $silver: #dadddf;\n$black-60: rgba(0, 0, 0, 0.6);\n $cerulean: #009cde;\n$deep-lavender-90: rgb(115, 86, 165);\n$n3: #b7c9d3;";
  tarea.val(tval);
}

function createCustomList() {
  var tarea = $('textarea').val(),
    colorsArr = [];

  outColor = getTextColor(tarea, patt1);
  colorsArr = remove_duplicates_es6(outColor);

  // console.log('colorsArr',colorsArr);

  addCustomList(colorsArr, 'named-colors-container');
}

function addCustomList(outColor, className) {
  //create ul
  var $ul = $('<ol class="' + className + ' custom_select__list">').appendTo($cityWrapper),
    sortedArr = outColor;
  if($('.custom_select__list').length > 1) {
    $('.custom_select__list').remove();
  }

  //put li inside ul
  sortedArr
    .map(function (item) {
      var rgb = ntc.rgb(item),
        n_match = ntc.name(item),
        isRGB = clr.includes('rgb' || 'rgba' || 'RGB' || 'RGBA' &&'('&&')');

      if(isRGB){ rgb = item; }
      $ul.append(
        "<li class='custom_select__item' >" +
        "<p><span class='color-number' style='background-color: " + item + "'></span><span> " + item + "</span><span> RGB: "+ rgb +"</span>" +
        "<span><b> Name: "+ n_match[1] +"</b></span>" +
        "</p>"+
        "</li>"
      )
    });
}

$('.js_btn-add-text').on('click', addText);

$('.js_btn-set-colors').on('click', createCustomList);