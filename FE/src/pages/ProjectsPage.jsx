import ProjectListComponent from '../components/listProject';

export default function ProjectPage() {
    return (
        <div className='w-full h-full px-2 py-28 lg:px-7 flex flex-col gap-10 items-center dark:bg-[#121212] dark:text-white'>
            <ProjectListComponent />
        </div>
    );
}
