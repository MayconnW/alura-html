function percorreArray(array, comportamento){
  
  for (var I=0;I < array.length;I++){
    comportamento(array[I]);
  }
  
}