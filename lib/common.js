// ------------충돌 체크 센서-----------------------------------------------------
function collisionCheckSensor(me,target){ 
  let me_x = parseInt(me.fakeX);
  let me_y = parseInt(me.fakeY);
  let me_width = parseInt(me.div.style.width);
  let me_height = parseInt(me.div.style.height);
  
  let target_x = parseInt(target.div.style.left);
  let target_y = parseInt(target.div.style.top);
  let target_width = parseInt(target.div.style.width);
  let target_height = parseInt(target.div.style.height);
  
  return !(me_x + me_width<target_x|| // me의 오른쪽이 target의 왼쪽보다 왼쪽에 있으면
  me_x> target_x+target_width|| // me의 왼쪽이 target의 오른쪽보다 있다면 
  me_y+me_height<target_y|| // me 아래쪽으보다 target보다 위에 있다면
  me_y>target_y+target_height); // me 아래쪽으보다 target보다 위에 있다면
  
}