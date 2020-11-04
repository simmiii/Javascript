(function()
{

    const custimg=document.querySelector('#customer-img')
    const custNmae=document.querySelector('#customer-name')
    const custText=document.querySelector('#customer-text')
    const buttons=document.querySelectorAll('.btn');
    let index=0;
    const customers=[];
    function Cust(img,name,text)
    {
        this.img=img;
        this.name=name;
        this.text=text;
    }
    function createCust(img,name,text)
    {
        let fullname=`img/customer-${img}.jpg`
        let cust1=new Cust(fullname,name,text)
        customers.push(cust1)
    }
    createCust(1, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCust(2, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCust(3, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    
    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(e)
        {
            if (e.target.parentElement.classList.contains('prevBtn')){
                if(index===0)
                {
                    index=customers.length;
                }
                index--;
                custimg.src=customers[index].img
                custNmae.textContent=customers[index].name
                custText.textContent=customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++;
                if(index===customers.length)
                {
                    index=0;
                }
                
                custimg.src=customers[index].img
                custNmae.textContent=customers[index].name
                custText.textContent=customers[index].text
            }
        })
    })
        
    
})();