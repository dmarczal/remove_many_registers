// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function toggleSelectAll(form){

  var object_form = $(form);

  checkboxes = object_form.getInputs('checkbox');

  checkboxes.each(
     function(e){
       if (e.id == "toggleSelect_all") {
          select = e.checked;
       }else{
           e.checked = select;
      }
  });
}
