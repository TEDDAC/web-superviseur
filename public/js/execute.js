async function runTab(array) {
  let tab = window.open();
  let i = 0;
  if(array.length == 0){
    return;
  }
  try {
      while(true){
        tab.location = array[i].lien;
        await wait(array[i].duree*60*1000);
        i++;
        if(i == array.length){
          i = 0;
        }
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