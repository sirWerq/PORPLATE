export default function TestingPage() {
    const url = fetch(
        `https://minio.rikztech.my.id/ui/browser/assets/c5e163693fc5fb6df11c300d836f3593bbef6ae4_s2_n3_y1.jpg`
    );
    const res = url.presignedPutObject;

    return (
        <div className='w-full h-full px-2 py-10 lg:p-7 flex flex-col gap-10 items-center dark:bg-[#121212]'>
            <h1>Testing MinIO Bucket</h1>
            <img
                src={res}
                alt='MinIO Image'
                style={{ width: '300px', height: 'auto' }}
            />
        </div>
    );
}
