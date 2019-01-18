<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<!--
Adapted from http://philogb.github.io/jit/static/v20/Jit/Examples/Spacetree/example1.html
-->

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Spacetree - SpaceTree with on-demand nodes</title>

  <!-- CSS Files -->
  <link type="text/css" href="//philogb.github.io/jit/static/v20/Jit/Examples/css/base.css" rel="stylesheet" />
  <link type="text/css" href="//philogb.github.io/jit/static/v20/Jit/Examples/css/Spacetree.css" rel="stylesheet" />
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
  <script language="javascript" type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.min.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <!--[if IE]><script language="javascript" type="text/javascript" src="../../Extras/excanvas.js"></script><![endif]-->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- JIT Library File -->
  <script language="javascript" type="text/javascript" src="//philogb.github.io/jit/static/v20/Jit/jit.js"></script>

  <!-- jQuery -->
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>

  <style>
    .node_tooltip {
      height: auto;
      border-radius: 10px;
      padding: 10px;
      text-align: left;
    }
    .notice {
      padding: 10px;
      font-style: italic;
    }
     .fa{
      margin-left: 3px;
      margin-right: 3px;
      font-size: 16px;

    }
    .fa:hover{
      cursor: pointer;

      opacity: 0.5;
    }
  </style>

  <!-- Example File -->
  <script language="javascript" type="text/javascript">
    var labelType, useGradients, nativeTextSupport, animate;
    (function() {
      var ua = navigator.userAgent,
              iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
              typeOfCanvas = typeof HTMLCanvasElement,
              nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
              textSupport = nativeCanvasSupport
                      && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
      //I'm setting this based on the fact that ExCanvas provides text support for IE
      //and that as of today iPhone/iPad current text support is lame
      labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
      nativeTextSupport = labelType == 'Native';
      useGradients = nativeCanvasSupport;
      animate = !(iStuff || !nativeCanvasSupport);
    })();
    var Log = {
      elem: false,
      write: function(text){
        if (!this.elem)
          this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
      }
    }








    function init() {
      // The JSON here would need to be adapted to a swagmap (or vice-versa), of course...
      alert("called");
      var json = {
        id: "node02",
        name: "0.2",

        data: {},
        children: [{
          id: "node13",
          name: "1.3",
          data: {},
          children: [{
            id: "node24",
            name: "2.4",
            data: {},
            children: []
          }, {
            id: "node222",
            name: "2.22",
            data: {},
            children: [{
              id: "node323",
              name: "3.23",
              data: {},
              children: [{
                id: "node424",
                name: "4.24",
                data: {},
                children: []
              }]
            }]
          }]
        }, {
          id: "node125",
          name: "1.25",
          data: {},
          children: [{
            id: "node226",
            name: "2.26",
            data: {},
            children: []
          }, {
            id: "node237",
            name: "2.37",
            data: {},
            children: []
          }, {
            id: "node258",
            name: "2.58",
            data: {},
            children: []
          }]
        }, {
          id: "node165",
          name: "1.65",
          data: {},
          children: [{
            id: "node266",
            name: "2.66",
            data: {},
            children: []
          }, {
            id: "node283",
            name: "2.83",
            data: {},
            children: []
          }, {
            id: "node2104",
            name: "2.104",
            data: {},
            children: []
          } ]
        }]
      };

      /*var test=JSON.stringify(obj.rootElements)
      test = test.replace(/\"([^(\")"]+)\":/g,"$1:");
      var test1=test.replace(/"/g, "'");
      var json=(test1);
      alert(json);*/
      /*var json=obj.rootElements;*/
      var subtree = json.children.pop();
      //end

      var st = new $jit.ST({
        //id of viz container element
        injectInto: 'infovis',
        //set duration for the animation
        duration: 800,
        //set animation transition type
        transition: $jit.Trans.Quart.easeInOut,
        //set distance between node and its children
        levelDistance: 50,
        //enable panning
        Navigation: {
          enable:true,
          panning:true
        },
        offsetX: 50,
        //set node and edge styles
        //set overridable=true for styling individual
        //nodes or edges
        Node: {
          height:30,
          width:30,
          /*autoHeight: true,
          autoWidth: true,*/
          type: 'rectangle',
          color: '#aaa',
          overridable: true
        },

        Edge: {
          type: 'bezier',
          overridable: true
        },

        onBeforeCompute: function(node){
          Log.write("loading"+node.name);
        },

        onAfterCompute: function(){
          Log.write("done");
        },


        //This method is called on DOM label creation.
        //Use this method to add event handlers and styles to
        //your node.

        onCreateLabel: function(label, node){
          label.id = node.id;
          label.innerHTML = node.name;
//          label.setAttribute("data-toggle","modal");
//          label.setAttribute("data-target","#treeViewModal");


            /*label.onclick = function() {
                var divOperation = document.createElement("div");


                Log.write("removing subtree...");
             if(!node._depth==0 ) {
               st.removeSubtree(label.id, true, 'animate', {
                 hideLabels: false,
                 onComplete: function () {
                   removing = false;
                   Log.write("subtree removed");
                 }
               });
             }

              }*/





         label.onclick = function() {
            st.onClick(node.id);
            var pos = $(label).position();
            var tooltip  = $("<div>")
                    .attr("id", "label-" + label.id)
                    .attr("class", "node_tooltip")
                    .css({
                      position: "absolute",
                      top: pos.top + 20,
                      left: pos.left- 10,
                      background: "white",
                      color: "black"
                    })



                    .mouseout(function() {
                        $(this).delay(1000).fadeOut({
                          complete: function() {
                            this.remove();
                          }
                        });
                    })
                    .html("<i class='fa fa-plus-square' style='color:rgba(80, 255, 38, 0.92)' id='addbutton''></i><i class='fa fa-minus-square' style='color:rgba(255, 0, 2, 0.9)' id='removeButton'></i><i class='fa fa-pencil-square'  data-toggle='modal' data-target='#treeViewModal' style='color:rgba(83, 92, 255, 0.91)' id='editButton''></i>")
                    .hide()
                    .appendTo($("#popovers")
            ).fadeIn();
           $("#removeButton").click(function()
           {

               st.removeSubtree(label.id, true, 'animate', {
                 hideLabels: false,
                 onComplete: function () {
                   removing = false;
                   Log.write("subtree removed");
                 }
               });

           })
           $("#addbutton").click(function()
           {
             alert("")

              st.addSubtree(json, 'animate',
                      {
                        hideLabels: false,
                        onComplete: function () {
                          Log.write("subtree added");
                        }
                      });

           })
           $("#editButton").click(function() {
               alert("")
               $("#nodeDetails").html("<p>" + "node name=" + node.name + " Node id=" + node.id + "</p>")



           })
           $("#subNode").click(function(){
               var inputnode=$("#inputnode").val();
                       alert(inputnode)
               label.id=node.id;
               label.innerHTML=inputnode;
           })

         }



          //label.onmouseout  = function() {
          //	var tooltip = $("#label-" + label.id);
          //	if ( ! tooltip.data("claimed") ) {
          //		tooltip.mouseout();
          //	}
          //}

          //set label styles
          var style = label.style;

          style.cursor = 'pointer';
          style.color = '#333';
          style.fontSize = '0.8em';
          style.textAlign= 'center';
          style.padding = '5px';

        },





        //This method is called right before plotting
        //a node. It's useful for changing an individual node
        //style properties before plotting it.
        //The data properties prefixed with a dollar
        //sign will override the global node style properties.
        onBeforePlotNode: function(node){
          //add some color to the nodes in the path between the
          //root node and the selected node.
          if (node.selected) {
            node.data.$color = "white";
          }
          else {
            delete node.data.$color;
            //if the node belongs to the last plotted level
            if(!node.anySubnode("exist")) {
              //count children number
              var count = 0;
              node.eachSubnode(function(n) { count++; });
              //assign a node color based on
              //how many children it has
              node.data.$color = ['#85EBB3', '#CB768E', '#1DC67B', '#C6B91D', '#1D90C6', '#14B0F9'][count];
            }
          }
        },

        //This method is called right before plotting
        //an edge. It's useful for changing an individual edge
        //style properties before plotting it.
        //Edge data proprties prefixed with a dollar sign will
        //override the Edge global style properties.
        onBeforePlotLine: function(adj){
          if (adj.nodeFrom.selected && adj.nodeTo.selected) {
            adj.data.$color = "#E1E1E1";
            adj.data.$lineWidth = 3;
          }
          else {
            delete adj.data.$color;
            delete adj.data.$lineWidth;
          }
        }
      });
      st.loadJSON(json);
      st.onClick(st.root);


      st.compute();
      st.plot();
      /*st.geom.translate(new $jit.Complex(-150, 0), "current");*/


      console.log("done");



    }
  </script>
</head>

<body onload="init();">


<div id="container">
  <div id="center-container">
    <div id="infovis"></div>
    <div id="popovers"></div>

    <div id="log">LOG</div>
  </div>
</div>




<!-- Modal -->
<div class="modal fade" id="treeViewModal" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content" style="width: 282px">
      <div class="modal-header ">

        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <div id="nodeDetails"></div>

      </div>
      <div class="modal-body">
        <div class="row">
            <input type="numeric" class="form-control" id="inputnode">
            <button type="submit" class="btn btn-sm btn-primary" id="subNode">Submit</button>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>

</div>

</body>
</html>