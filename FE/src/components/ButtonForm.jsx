// eslint-disable-next-line react/prop-types
export default function ButtonForm({ text, textDisable, isSubmit }) {
    return (
        <div className='flex flex-col items-center w-full space-y-1'>
            <button
                disabled={isSubmit}
                className='bg-violet-500 px-4 py-3 font-semibold text-white rounded-md'
                type='submit'
            >
                {isSubmit ? text : textDisable}
            </button>
        </div>
    );
}
