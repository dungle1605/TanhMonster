$(document).ready(function () {
  var clix = [0, 0, 0, 0];
  var leftPXArray = ["609", "617", "620", "628", "611", "600", "600"];
  var headClick = 0;
  var eyeClick = 0;
  var noseClick = 0;
  var mouthClick = 0;

  $("#head").click(function () {
    moveMe(0, this);
  });

  $("#eyes").click(function () {
    moveMe(1, this);
  });

  $("#nose").click(function () {
    moveMe(2, this);
  });

  $("#mouth").click(function () {
    moveMe(3, this);
  });

  function moveMe(i, obj) {
    var countFromCache =  getCountFromCache(obj.id);
    var leftPX = leftPXArray[countFromCache];
    if (clix[i] < 7) {
      $(obj).animate({ left: `-=${leftPX}px` }, 500);
      clix[i] = clix[i] + 1;
    } else {
      clix[i] = 0;
      resetCache();
      $(obj).animate({ left: "0px" }, 500);
    }
  }

  function getCountFromCache(prop) {
    var countFromCache = 0;
    switch (prop) {
      case "head":
        countFromCache = headClick;
        headClick += 1;
        break;
      case "eyes":
        countFromCache = eyeClick;
        eyeClick += 1;
        break;
      case "nose":
        countFromCache = noseClick;
        noseClick += 1;
        break;
      case "mouth":
        countFromCache = mouthClick;
        mouthClick += 1;
        break;
    }

    return countFromCache;
  }

  function resetCache(){
    headClick = mouthClick = eyeClick = noseClick = 0;
  }

  // $('#random_images_btn').click(randomize);

  // function getRandom(num) {
  //   var my_random_num = Math.floor(Math.random() * num);
  //   return my_random_num;
  // }

  // function randomize() {
  //   $(".face").each(function (index) {
  //     var countFromCache =  getCountFromCache();
  //     var w = leftPXArray[countFromCache];

  //     var target_position = getRandom(m);
  //     var current_position = clix[index];
  //     clix[index] = target_position;
  //     if (target_position > current_position) {
  //       var move_to = (target_position - current_position) * w;
  //       $(this).animate({ left: "-=" + move_to + "px" }, 500);
  //     } else if (target_position < current_position) {
  //       var move_to = (current_position - target_position) * w;
  //       $(this).animate({ left: "+=" + move_to + "px" }, 500);
  //     } else{}
  //   });
  // }
});
