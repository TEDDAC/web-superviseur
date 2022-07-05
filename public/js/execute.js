async function runTab(array) {
  if(array.length == 0){
    return;
  }
  array.forEach(element => {
      element.nextDateTimeTriggered = Date.now() + element.frequence*60*1000;
  });
  try {
    let tab = window.open();
    let i = 0;
    console.log(array);
    console.log(Date.now().toString());
    while(true){
      let current = array.find((element) => 
        Date.now() > element.nextDateTimeTriggered && element.frequence > 0
      )
      if(current == undefined){
        current = array.find((element) => 
          element.frequence == 0
        )
      }
      if(current == undefined){
        current = array[0];
      }
      console.log(current);
      current.nextDateTimeTriggered = Date.now() + current.frequence*60*1000;
      tab.location = current.lien;
      await wait(current.duree*60*1000);
    }
  } catch (error) {
    console.log('catch error', error.message);
  } finally {
    console.log('task finally')
  }
}

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(ms);}, ms);
  });
}