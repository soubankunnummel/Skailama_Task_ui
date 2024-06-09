
// ->>> to get first letter of the project names


export const getInitials = (title) => {
  const words = title.split(' ');
  let initials = '';

  if (words.length > 0) {
      initials += words[0][0]; 
  }
  
  if (words.length > 1) {
      initials += words[1][0];  
  }

  return initials.toUpperCase();
};
  


// ->>> to set bg color 

const firstRow = ['bg-primery', 'bg-[#F8A01D]', 'bg-[#6366F1]'];
const secondRow = ['bg-[#F8A01D]', 'bg-[#F8A01D]', 'bg-primery'];

export const getBgColor = (index) => {
  const isSecondRow = Math.floor(index / firstRow.length) % 2 === 1;
  const colorIndex = index % firstRow.length;

  return isSecondRow ? secondRow[colorIndex] : firstRow[colorIndex];
};




/// ->>> to format time

export const formatDate = (dateTimeString) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const date = new Date(dateTimeString);
  const formattedDate = date.toLocaleDateString('en-US', options);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${formattedDate} | ${hours}:${minutes}`;
};


///  ->>> image upload 

 export const handleImageUpload = (event, setUploadedImage) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  }
};

