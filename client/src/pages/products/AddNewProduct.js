import MultiSelectBox from "components/products/MultiSelectBox";
import SelectBox from "components/global/SelectBox";
import Img1 from 'assets/images/img1.jpg';
import { useRef, useState } from "react";
import BackBtn from "components/global/BackBtn";
import Heading from "components/global/Heading";



const AddNewProduct = () => {
    const prodImgRef = useRef(null);
    const [attributes , setAttributes] = useState([]);
    const [attrData , setAttrData] = useState({
        shape : '',
        size : '' ,
        weight : '' ,
        color : ''
    })

    const handleAttrChange = (e) => {
        const { name , value } = e.target;
        setAttrData(prev => ({...prev , [name] : value }))
    }
    
    return (
        <div className="sm:p-6 py-4 px-2">
            <div className="flex items-center justify-between">
                <Heading title='Add New Product' />
                <BackBtn />
            </div>
            <div>
                <form className="flex flex-col gap-6">
                    <div className='shadow-bg sm:py-6 py-4 sm:px-6 px-3 mt-6 flex flex-col gap-6'>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Name (EN)</label>
                            <input 
                            type="text" 
                            placeholder='New Product'
                            className='textField'
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Short Description (EN)</label>
                            <textarea
                            type="text" 
                            placeholder='Product description...'
                            className='textField resize-none'
                            rows={8}
                            />
                        </div>
                        
                    </div>
                    <div className="flex sm:items-center sm:flex-row flex-col sm:gap-8 gap-4">
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Price</label>
                            <input 
                            type="number" 
                            placeholder='Ex : 100'
                            className='textField'
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Unit</label>
                            <SelectBox 
                            options={[
                                {value : "kg" , label : "Kg"},
                                {value : "gm" , label : "Gm"},
                                {value : "ltr" , label : "ltr"},
                                {value : "pc" , label : "Pc"},
                            ]} 
                            />
                        </div>
                    </div>
                    <div className="flex sm:items-center sm:flex-row flex-col sm:gap-8 gap-4">
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Tax</label>
                            <input 
                            type="number" 
                            placeholder='Ex : 7'
                            className='textField'
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Tax Type</label>
                            <SelectBox 
                            options={[
                                {value : "amount" , label : "Amount"},
                                {value : "percent" , label : "Percent"},
                            ]} 
                            />
                        </div>
                    </div>
                    <div className="flex sm:items-center sm:gap-8 gap-4 sm:flex-row flex-col">
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Discount</label>
                            <input 
                            type="number" 
                            placeholder='Ex : 7'
                            className='textField'
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Discount Type</label>
                            <SelectBox 
                            options={[
                                {value : "amount" , label : "Amount"},
                                {value : "percent" , label : "Percent"},
                            ]} 
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Stock</label>
                            <input 
                            type="number" 
                            placeholder='Ex : 15'
                            className='textField'
                            />
                        </div>
                    </div>
                    <div className="flex sm:items-center sm:flex-row flex-col sm:gap-8 gap-4">
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Category * </label>
                            <SelectBox 
                            options={[
                                {value : "mensFashion" , label : "Mens Fashion"},
                                {value : "footwear" , label : "Footwear"},
                                {value : "electronics" , label : "Electronics"},
                            ]} 
                            />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Sub Category</label>
                            <SelectBox 
                            options={[
                                {value : "shirt" , label : "T-Shirts"},
                                {value : "shoes" , label : "Shoes"},
                                {value : "electronics" , label : "Electronics"},
                            ]} 
                            />
                        </div>
                    </div>
                    {/* MULTI SELECT */}
                    <div className="border rounded-md p-4 pb-6 mt-3">
                         <div className='flex-1 flex flex-col gap-2'>
                            <label className='text-[15px]'>Attributes </label>
                            <MultiSelectBox 
                            options={[
                                {value : "size" , label : "Color" , name : 'size' },
                                {value : "shape" , label : "Shape" , name : 'shape'},
                                {value : "size" , label : "Size" , name : 'size'},
                                {value : "weight" , label : "Weight" , name : 'weight'},
                            ]} 
                            setAttributes={setAttributes}
                            attributes={attributes}
                            />
                        </div>
                        {
                            attributes?.length > 0 
                            ? 
                            <div className="mt-8 flex flex-col gap-4">
                                {
                                    attributes?.map((attr , i) => (
                                        <div className="flex items-center gap-8" key={i}>
                                            <div className="flex-[0.3]">
                                                <input 
                                                className="textField w-full"
                                                value={attr?.label} 
                                                readOnly
                                                />
                                            </div>
                                            <div className="flex-[0.7]">
                                                <input 
                                                type="text" 
                                                placeholder='Enter choice values'
                                                className='textField w-full'
                                                name={attr.name}
                                                onChange={handleAttrChange}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            : ''
                        }
                    </div>

                    <div>
                        <label className='text-[15px]'>Product Image* </label>
                        <input type="file" name="" hidden ref={prodImgRef} />
                        <div className="w-fit h-fit border border-dashed p-1 rounded-md mt-2 cursor-pointer"
                        onClick={() => prodImgRef?.current?.click() }
                        >
                            <img src={Img1} alt="" className="w-[200px] h-[200px] rounded-md object-cover"/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddNewProduct;