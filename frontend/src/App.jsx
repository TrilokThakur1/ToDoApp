import React, { useEffect, useState } from "react";
import NavBar from "./pages/NavBar";
import axios from "axios";

const App = () => {
  let [todo, settodo] = useState([]);
  let [res, setres] = useState("");
  
  let [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(
        "http://127.0.0.1:8000/api/task/showTask"
      );
      settodo(res.data);
    }
    getData();
  }, [refresh]);

  async function handleSubmit(e) {
    e.preventDefault();
    let data = {
      TaskName: e.target[0].value,
      Title: e.target[1].value,
      Discriptions: e.target[2].value,
    };

    await axios.post(
      "http://127.0.0.1:8000/api/task/createTask",
      data
    );
    setRefresh(!refresh);
    e.target.reset();
  }

   async function handleDelete(id)
   {
     let comfirmdlt = confirm("Are You Sure, You Want to Delete this Item!")
     if(comfirmdlt)
     {
      let res = await axios.delete(`http://localhost:8000/api/task/delete/${id}` );
      console.log(res.data);
      setres(res.data)
      setRefresh(!refresh);
     }
  }


  return (
    <div className="min-h-screen text-slate-100 selection:bg-cyan-500/30 pt-24 pb-12 px-4">
      <NavBar />

      {/* FORM */}
      <div className="max-w-xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent relative z-10">
          Add New Task
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Task Name"
              className="w-full px-5 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500 text-slate-200"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Task Title"
              className="w-full px-5 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500 text-slate-200"
            />
          </div>
          <div className="space-y-2">
            <textarea
              placeholder="Task Description"
              rows="3"
              className="w-full px-5 py-3 bg-slate-950/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500 text-slate-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 rounded-xl font-bold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/10"
          >
            Create Task
          </button>
        </form>
      </div>

      {/* TASK LIST */}
      <div className="max-w-3xl mx-auto mt-12 grid gap-5">
        {todo.map((e, i) => (
          <div
            key={i}
            className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500" />
            
            <div className="pl-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {e.TaskName}
                </h2>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-800/50 border border-white/5 text-slate-400">
                  #{i + 1}
                </span>
              </div>
              
              <p className="font-semibold text-cyan-200/80 mb-2 text-sm uppercase tracking-wider">
                {e.Title}
              </p>
              
              <p className="text-slate-400 leading-relaxed text-sm mb-4">
                {e.Discriptions}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(e.id)}
                  className="px-4 py-2 bg-red-500/10 text-red-400 text-sm font-semibold rounded-lg border border-red-500/20
                             hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-300 active:scale-95 transition-all duration-200 flex items-center gap-2 group/btn"
                >
                  <span>Delete Task</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover/btn:opacity-100 transition-opacity"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {todo.length === 0 && (
          <div className="text-center py-12 text-slate-500 bg-white/5 rounded-2xl border border-white/5 border-dashed">
            <p>No tasks yet. Create one above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
