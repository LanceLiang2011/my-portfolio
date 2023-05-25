import React from "react";

export default function Jupyter() {
  return (
    <section className="text-center">
      <div>
        <h3 className="text-purple-600">Jupyter Notebook</h3>
        <div className="mx-auto my-6 max-w-4xl p-6">
          <p>
            Welcome to my Data Science portfolio, featuring a compilation of
            Jupyter notebooks from my slef studies and Kaggle projects. This
            space is a testament to my learning journey and practical
            application of various data science methodologies. It&apos;s a
            growing repository, regularly updated with new insights as I
            continue to hone my skills. Thanks for stopping by!
          </p>
        </div>
        <div className="mx-auto my-6 max-w-7xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href="https://nbviewer.org/github/LanceLiang2011/Capstone_Project_Fandango/blob/main/Capstone-Project%20.ipynb"
              target="_blank"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Data Analysis Capstone Prject: Pierian Data Inc.
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This is a capstone project of online cousrse by Pierian Data Inc.
              The project is for practising pandas, numpy, and seaborn library.
            </p>
            <a
              href="https://nbviewer.org/github/LanceLiang2011/Capstone_Project_Fandango/blob/main/Capstone-Project%20.ipynb"
              target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}