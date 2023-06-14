function extension(string) {
    console.log(string.slice(string.indexOf('.')).replace('.', ''));
}
    
extension('image.jpg');