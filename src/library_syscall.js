mergeInto(LibraryManager.library, {
  $SYSCALLS: {
#if SYSCALL_DEBUG
    NAME_TO_CODE: {
      SYS_restart_syscall: 0,
      SYS_exit: 1,
      SYS_fork: 2,
      SYS_read: 3,
      SYS_write: 4,
      SYS_open: 5,
      SYS_close: 6,
      SYS_waitpid: 7,
      SYS_creat: 8,
      SYS_link: 9,
      SYS_unlink: 10,
      SYS_execve: 11,
      SYS_chdir: 12,
      SYS_time: 13,
      SYS_mknod: 14,
      SYS_chmod: 15,
      SYS_lchown: 16,
      SYS_break: 17,
      SYS_oldstat: 18,
      SYS_lseek: 19,
      SYS_getpid: 20,
      SYS_mount: 21,
      SYS_umount: 22,
      SYS_setuid: 23,
      SYS_getuid: 24,
      SYS_stime: 25,
      SYS_ptrace: 26,
      SYS_alarm: 27,
      SYS_oldfstat: 28,
      SYS_pause: 29,
      SYS_utime: 30,
      SYS_stty: 31,
      SYS_gtty: 32,
      SYS_access: 33,
      SYS_nice: 34,
      SYS_ftime: 35,
      SYS_sync: 36,
      SYS_kill: 37,
      SYS_rename: 38,
      SYS_mkdir: 39,
      SYS_rmdir: 40,
      SYS_dup: 41,
      SYS_pipe: 42,
      SYS_times: 43,
      SYS_prof: 44,
      SYS_brk: 45,
      SYS_setgid: 46,
      SYS_getgid: 47,
      SYS_signal: 48,
      SYS_geteuid: 49,
      SYS_getegid: 50,
      SYS_acct: 51,
      SYS_umount2: 52,
      SYS_lock: 53,
      SYS_ioctl: 54,
      SYS_fcntl: 55,
      SYS_mpx: 56,
      SYS_setpgid: 57,
      SYS_ulimit: 58,
      SYS_oldolduname: 59,
      SYS_umask: 60,
      SYS_chroot: 61,
      SYS_ustat: 62,
      SYS_dup2: 63,
      SYS_getppid: 64,
      SYS_getpgrp: 65,
      SYS_setsid: 66,
      SYS_sigaction: 67,
      SYS_sgetmask: 68,
      SYS_ssetmask: 69,
      SYS_setreuid: 70,
      SYS_setregid: 71,
      SYS_sigsuspend: 72,
      SYS_sigpending: 73,
      SYS_sethostname: 74,
      SYS_setrlimit: 75,
      SYS_getrlimit: 76   /* Back compatible 2Gig limited rlimit */,
      SYS_getrusage: 77,
      SYS_gettimeofday: 78,
      SYS_settimeofday: 79,
      SYS_getgroups: 80,
      SYS_setgroups: 81,
      SYS_select: 82,
      SYS_symlink: 83,
      SYS_oldlstat: 84,
      SYS_readlink: 85,
      SYS_uselib: 86,
      SYS_swapon: 87,
      SYS_reboot: 88,
      SYS_readdir: 89,
      SYS_mmap: 90,
      SYS_munmap: 91,
      SYS_truncate: 92,
      SYS_ftruncate: 93,
      SYS_fchmod: 94,
      SYS_fchown: 95,
      SYS_getpriority: 96,
      SYS_setpriority: 97,
      SYS_profil: 98,
      SYS_statfs: 99,
      SYS_fstatfs: 100,
      SYS_ioperm: 101,
      SYS_socketcall: 102,
      SYS_syslog: 103,
      SYS_setitimer: 104,
      SYS_getitimer: 105,
      SYS_stat: 106,
      SYS_lstat: 107,
      SYS_fstat: 108,
      SYS_olduname: 109,
      SYS_iopl: 110,
      SYS_vhangup: 111,
      SYS_idle: 112,
      SYS_vm86old: 113,
      SYS_wait4: 114,
      SYS_swapoff: 115,
      SYS_sysinfo: 116,
      SYS_ipc: 117,
      SYS_fsync: 118,
      SYS_sigreturn: 119,
      SYS_clone: 120,
      SYS_setdomainname: 121,
      SYS_uname: 122,
      SYS_modify_ldt: 123,
      SYS_adjtimex: 124,
      SYS_mprotect: 125,
      SYS_sigprocmask: 126,
      SYS_create_module: 127,
      SYS_init_module: 128,
      SYS_delete_module: 129,
      SYS_get_kernel_syms: 130,
      SYS_quotactl: 131,
      SYS_getpgid: 132,
      SYS_fchdir: 133,
      SYS_bdflush: 134,
      SYS_sysfs: 135,
      SYS_personality: 136,
      SYS_afs_syscall: 137,
      SYS_setfsuid: 138,
      SYS_setfsgid: 139,
      SYS__llseek: 140,
      SYS_getdents: 141,
      SYS__newselect: 142,
      SYS_flock: 143,
      SYS_msync: 144,
      SYS_readv: 145,
      SYS_writev: 146,
      SYS_getsid: 147,
      SYS_fdatasync: 148,
      SYS__sysctl: 149,
      SYS_mlock: 150,
      SYS_munlock: 151,
      SYS_mlockall: 152,
      SYS_munlockall: 153,
      SYS_sched_setparam: 154,
      SYS_sched_getparam: 155,
      SYS_sched_setscheduler: 156,
      SYS_sched_getscheduler: 157,
      SYS_sched_yield: 158,
      SYS_sched_get_priority_max: 159,
      SYS_sched_get_priority_min: 160,
      SYS_sched_rr_get_interval: 161,
      SYS_nanosleep: 162,
      SYS_mremap: 163,
      SYS_setresuid: 164,
      SYS_getresuid: 165,
      SYS_vm86: 166,
      SYS_query_module: 167,
      SYS_poll: 168,
      SYS_nfsservctl: 169,
      SYS_setresgid: 170,
      SYS_getresgid: 171,
      SYS_prctl: 172,
      SYS_rt_sigreturn: 173,
      SYS_rt_sigaction: 174,
      SYS_rt_sigprocmask: 175,
      SYS_rt_sigpending: 176,
      SYS_rt_sigtimedwait: 177,
      SYS_rt_sigqueueinfo: 178,
      SYS_rt_sigsuspend: 179,
      SYS_pread64: 180,
      SYS_pwrite64: 181,
      SYS_chown: 182,
      SYS_getcwd: 183,
      SYS_capget: 184,
      SYS_capset: 185,
      SYS_sigaltstack: 186,
      SYS_sendfile: 187,
      SYS_getpmsg: 188,
      SYS_putpmsg: 189,
      SYS_vfork: 190,
      SYS_ugetrlimit: 191,
      SYS_mmap2: 192,
      SYS_truncate64: 193,
      SYS_ftruncate64: 194,
      SYS_stat64: 195,
      SYS_lstat64: 196,
      SYS_fstat64: 197,
      SYS_lchown32: 198,
      SYS_getuid32: 199,
      SYS_getgid32: 200,
      SYS_geteuid32: 201,
      SYS_getegid32: 202,
      SYS_setreuid32: 203,
      SYS_setregid32: 204,
      SYS_getgroups32: 205,
      SYS_setgroups32: 206,
      SYS_fchown32: 207,
      SYS_setresuid32: 208,
      SYS_getresuid32: 209,
      SYS_setresgid32: 210,
      SYS_getresgid32: 211,
      SYS_chown32: 212,
      SYS_setuid32: 213,
      SYS_setgid32: 214,
      SYS_setfsuid32: 215,
      SYS_setfsgid32: 216,
      SYS_pivot_root: 217,
      SYS_mincore: 218,
      SYS_madvise: 219,
      SYS_madvise1: 219,
      SYS_getdents64: 220,
      SYS_fcntl64: 221 /* 223 is unused */,
      SYS_gettid: 224,
      SYS_readahead: 225,
      SYS_setxattr: 226,
      SYS_lsetxattr: 227,
      SYS_fsetxattr: 228,
      SYS_getxattr: 229,
      SYS_lgetxattr: 230,
      SYS_fgetxattr: 231,
      SYS_listxattr: 232,
      SYS_llistxattr: 233,
      SYS_flistxattr: 234,
      SYS_removexattr: 235,
      SYS_lremovexattr: 236,
      SYS_fremovexattr: 237,
      SYS_tkill: 238,
      SYS_sendfile64: 239,
      SYS_futex: 240,
      SYS_sched_setaffinity: 241,
      SYS_sched_getaffinity: 242,
      SYS_set_thread_area: 243,
      SYS_get_thread_area: 244,
      SYS_io_setup: 245,
      SYS_io_destroy: 246,
      SYS_io_getevents: 247,
      SYS_io_submit: 248,
      SYS_io_cancel: 249,
      SYS_fadvise64: 250 /* 251 is available for reuse (was briefly sys_set_zone_reclaim) */,
      SYS_exit_group: 252,
      SYS_lookup_dcookie: 253,
      SYS_epoll_create: 254,
      SYS_epoll_ctl: 255,
      SYS_epoll_wait: 256,
      SYS_remap_file_pages: 257,
      SYS_set_tid_address: 258,
      SYS_timer_create: 259,
      SYS_timer_settime: 260,
      SYS_timer_gettime: 261,
      SYS_timer_getoverrun: 262,
      SYS_timer_delete: 263,
      SYS_clock_settime: 264,
      SYS_clock_gettime: 265,
      SYS_clock_getres: 266,
      SYS_clock_nanosleep: 267,
      SYS_statfs64: 268,
      SYS_fstatfs64: 269,
      SYS_tgkill: 270,
      SYS_utimes: 271,
      SYS_fadvise64_64: 272,
      SYS_vserver: 273,
      SYS_mbind: 274,
      SYS_get_mempolicy: 275,
      SYS_set_mempolicy: 276,
      SYS_mq_open : 277,
      SYS_mq_unlink: 278,
      SYS_mq_timedsend: 279,
      SYS_mq_timedreceive: 280,
      SYS_mq_notify: 281,
      SYS_mq_getsetattr: 282,
      SYS_kexec_load: 283,
      SYS_waitid: 284 /* SYS_sys_setaltroot: 285 */,
      SYS_add_key: 286,
      SYS_request_key: 287,
      SYS_keyctl: 288,
      SYS_ioprio_set: 289,
      SYS_ioprio_get: 290,
      SYS_inotify_init: 291,
      SYS_inotify_add_watch: 292,
      SYS_inotify_rm_watch: 293,
      SYS_migrate_pages: 294,
      SYS_openat: 295,
      SYS_mkdirat: 296,
      SYS_mknodat: 297,
      SYS_fchownat: 298,
      SYS_futimesat: 299,
      SYS_fstatat64: 300,
      SYS_unlinkat: 301,
      SYS_renameat: 302,
      SYS_linkat: 303,
      SYS_symlinkat: 304,
      SYS_readlinkat: 305,
      SYS_fchmodat: 306,
      SYS_faccessat: 307,
      SYS_pselect6: 308,
      SYS_ppoll: 309,
      SYS_unshare: 310,
      SYS_set_robust_list: 311,
      SYS_get_robust_list: 312,
      SYS_splice: 313,
      SYS_sync_file_range: 314,
      SYS_tee: 315,
      SYS_vmsplice: 316,
      SYS_move_pages: 317,
      SYS_getcpu: 318,
      SYS_epoll_pwait: 319,
      SYS_utimensat: 320,
      SYS_signalfd: 321,
      SYS_timerfd_create: 322,
      SYS_eventfd: 323,
      SYS_fallocate: 324,
      SYS_timerfd_settime: 325,
      SYS_timerfd_gettime: 326,
      SYS_signalfd4: 327,
      SYS_eventfd2: 328,
      SYS_epoll_create1: 329,
      SYS_dup3: 330,
      SYS_pipe2: 331,
      SYS_inotify_init1: 332,
      SYS_preadv: 333,
      SYS_pwritev: 334,
      SYS_prlimit64: 340,
      SYS_name_to_handle_at: 341,
      SYS_open_by_handle_at: 342,
      SYS_clock_adjtime: 343,
      SYS_syncfs: 344,
      SYS_sendmmsg: 345,
      SYS_setns: 346,
      SYS_process_vm_readv: 347,
      SYS_process_vm_writev: 348,
      SYS_kcmp: 349,
      SYS_finit_module: 350
    },
    CODE_TO_NAME: {},
    getFromCode: function(code) {
      if (!SYSCALLS.CODE_TO_NAME[0]) {
        for (var name in SYSCALLS.NAME_TO_CODE) {
          SYSCALLS.CODE_TO_NAME[SYSCALLS.NAME_TO_CODE[name]] = name;
        }
      }
      assert(SYSCALLS.CODE_TO_NAME[code]);
      return SYSCALLS.CODE_TO_NAME[code];
    },
#endif

    // global state
    mappings: {},
    umask: 0x1FF,  // S_IRWXU | S_IRWXG | S_IRWXO

    // shared utilities
    calculateAt: function(dirfd, path) {
      if (path[0] !== '/') {
        // relative path
        var dir;
        if (dirfd === {{{ cDefine('AT_FDCWD') }}}) {
          dir = FS.cwd();
        } else {
          var dirstream = FS.getStream(dirfd);
          if (!dirstream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
          dir = dirstream.path;
        }
        path = PATH.join2(dir, path);
      }
      return path;
    },

    doStat: function(func, path, buf) {
      try {
        var stat = func(path);
      } catch (e) {
        if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
          // an error occurred while trying to look up the path; we should just report ENOTDIR
          return -ERRNO_CODES.ENOTDIR;
        }
        throw e;
      }
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_dev, 'stat.dev', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.__st_dev_padding, '0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.__st_ino_truncated, 'stat.ino', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_mode, 'stat.mode', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_nlink, 'stat.nlink', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_uid, 'stat.uid', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_gid, 'stat.gid', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_rdev, 'stat.rdev', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.__st_rdev_padding, '0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_size, 'stat.size', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_blksize, '4096', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_blocks, 'stat.blocks', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_atim.tv_sec, '(stat.atime.getTime() / 1000)|0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_atim.tv_nsec, '0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_mtim.tv_sec, '(stat.mtime.getTime() / 1000)|0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_mtim.tv_nsec, '0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_ctim.tv_sec, '(stat.ctime.getTime() / 1000)|0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_ctim.tv_nsec, '0', 'i32') }}};
      {{{ makeSetValue('buf', C_STRUCTS.stat.st_ino, 'stat.ino', 'i32') }}};
      return 0;
    },
    doMsync: function(addr, stream, len, flags) {
      var buffer = new Uint8Array(HEAPU8.buffer, addr, len);
      FS.msync(stream, buffer, 0, len, flags);
    },
    doMkdir: function(path, mode) {
      // remove a trailing slash, if one - /a/b/ has basename of '', but
      // we want to create b in the context of this function
      path = PATH.normalize(path);
      if (path[path.length-1] === '/') path = path.substr(0, path.length-1);
      FS.mkdir(path, mode, 0);
      return 0;
    },
    doMknod: function(path, mode, dev) {
      // we don't want this in the JS API as it uses mknod to create all nodes.
      switch (mode & {{{ cDefine('S_IFMT') }}}) {
        case {{{ cDefine('S_IFREG') }}}:
        case {{{ cDefine('S_IFCHR') }}}:
        case {{{ cDefine('S_IFBLK') }}}:
        case {{{ cDefine('S_IFIFO') }}}:
        case {{{ cDefine('S_IFSOCK') }}}:
          break;
        default: return -ERRNO_CODES.EINVAL;
      }
      FS.mknod(path, mode, dev);
      return 0;
    },
    doReadlink: function(path, buf, bufsize) {
      if (bufsize <= 0) return -ERRNO_CODES.EINVAL;
      var ret = FS.readlink(path);
      ret = ret.slice(0, Math.max(0, bufsize));
      writeStringToMemory(ret, buf, true);
      return ret.length;
    },
    doAccess: function(path, amode) {
      if (amode & ~{{{ cDefine('S_IRWXO') }}}) {
        // need a valid mode
        return -ERRNO_CODES.EINVAL;
      }
      var node;
      var lookup = FS.lookupPath(path, { follow: true });
      node = lookup.node;
      var perms = '';
      if (amode & {{{ cDefine('R_OK') }}}) perms += 'r';
      if (amode & {{{ cDefine('W_OK') }}}) perms += 'w';
      if (amode & {{{ cDefine('X_OK') }}}) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        return -ERRNO_CODES.EACCES;
      }
      return 0;
    },
    doDup: function(path, flags, suggestFD) {
      var suggest = FS.getStream(suggestFD);
      if (suggest) FS.close(suggest);
      return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
    },
    doReadv: function(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = {{{ makeGetValue('iov', 'i*8', 'i32') }}};
        var len = {{{ makeGetValue('iov', 'i*8 + 4', 'i32') }}};
        var curr = FS.read(stream, {{{ makeGetSlabs('ptr', 'i8', true) }}}, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
      }
      return ret;
    },
    doWritev: function(stream, iov, iovcnt, offset) {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = {{{ makeGetValue('iov', 'i*8', 'i32') }}};
        var len = {{{ makeGetValue('iov', 'i*8 + 4', 'i32') }}};
        var curr = FS.write(stream, {{{ makeGetSlabs('ptr', 'i8', true) }}}, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
      }
      return ret;
    },
  },

  __syscall__deps: ['$SYSCALLS', '$FS', '$SOCKFS', '$DNS', '$ERRNO_CODES', '$PATH', '__setErrNo', '$PROCINFO', '_read_sockaddr'
#if SYSCALL_DEBUG
                   ,'$ERRNO_MESSAGES'
#endif
#if EMTERPRETIFY_ASYNC
                   ,'$EmterpreterAsync'
#endif
  ],
  __syscall: function(which, varargs) {
    var get;
    if (typeof which === 'number') {
      get = function() {
        var ret = {{{ makeGetValue('varargs', '0', 'i32') }}};
        varargs += 4;
#if SYSCALL_DEBUG
        Module.printErr('  syscall arg: ' + ret);
#endif
        return ret;
      }
    } else {
#if ASSERTIONS
      assert(varargs === 0);
#endif
      var array = which;
      var which = array[0];
      var index = 1;
      get = function() {
#if ASSERTIONS
        assert(index < array.length);
#endif
#if SYSCALL_DEBUG
        Module.printErr('  syscall arg: ' + array[index]);
#endif
        return array[index++];
      };
    }
    function getStr() {
      var ret = Pointer_stringify(get());
#if SYSCALL_DEBUG
      Module.printErr('    (str: "' + ret + '")');
#endif
      return ret;
    }
    function getStreamFromFD() {
      var stream = FS.getStream(get());
      if (!stream) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
#if SYSCALL_DEBUG
      Module.printErr('    (stream: "' + stream.path + '")');
#endif
      return stream;
    }
    function getSocketFromFD() {
      var socket = SOCKFS.getSocket(get());
      if (!socket) throw new FS.ErrnoError(ERRNO_CODES.EBADF);
#if SYSCALL_DEBUG
      Module.printErr('    (socket: "' + socket.path + '")');
#endif
      return socket;
    }
    function get64() {
      var low = get(), high = get();
      if (low >= 0) assert(high === 0);
      else assert(high === -1);
#if SYSCALL_DEBUG
      Module.printErr('    (i64: "' + low + '")');
#endif
      return low;
    }
    function getZero() {
      assert(get() === 0);
    }
    // main
#if SYSCALL_DEBUG
    Module.printErr('syscall! ' + [which, SYSCALLS.getFromCode(which)]); //, stackTrace()]);
    var canWarn = true;
    var ret = (function() {
#endif
    try {
      switch (which) {
        case 1: { // exit
          var status = get();
          Module['exit'](status);
          return 0;
        }
        case 3: { // read
          var stream = getStreamFromFD(), buf = get(), count = get();
          return FS.read(stream, {{{ makeGetSlabs('buf', 'i8', true) }}}, buf, count);
        }
        case 4: { // write
          var stream = getStreamFromFD(), buf = get(), count = get();
          return FS.write(stream, {{{ makeGetSlabs('ptr', 'i8', true) }}}, buf, count);
        }
        case 5: { // open
          var pathname = getStr(), flags = get(), mode = get() /* optional TODO */;
          var stream = FS.open(pathname, flags, mode);
          return stream.fd;
        }
        case 6: { // close
          var stream = getStreamFromFD();
          FS.close(stream);
          return 0;
        }
        case 9: { // link
          var oldpath = get(), newpath = get();
          return -ERRNO_CODES.EMLINK; // no hardlinks for us
        }
        case 10: { // unlink
          var path = getStr();
          FS.unlink(path);
          return 0;
        }
        case 12: { // chdir
          var path = getStr();
          FS.chdir(path);
          return 0;
        }
        case 14: { // mknod
          var path = getStr(), mode = get(), dev = get();
          return SYSCALLS.doMknod(path, mode, dev);
        }
        case 15: { // chmod
          var path = getStr(), mode = get();
          FS.chmod(path, mode);
          return 0;
        }
        case 20: { // getpid
          return PROCINFO.pid;
        }
        case 29: { // pause
          return -ERRNO_CODES.EINTR; // we can't pause
        }
        case 33: { // access
          var path = getStr(), amode = get();
          return SYSCALLS.doAccess(path, amode);
        }
        case 34: { // nice
          var inc = get();
          return -ERRNO_CODES.EPERM; // no meaning to nice for our single-process environment
        }
        case 36: { // sync
          return 0;
        }
        case 38: { // rename
          var old_path = getStr(), new_path = getStr();
          FS.rename(old_path, new_path);
          return 0;
        }
        case 39: { // mkdir
          var path = getStr(), mode = get();
          return SYSCALLS.doMkdir(path, mode);
        }
        case 40: { // rmdir
          var path = getStr();
          FS.rmdir(path);
          return 0;
        }
        case 41: { // dup
          var old = getStreamFromFD();
          return FS.open(old.path, old.flags, 0).fd;
        }
        case 42:   // pipe
        case 51: { // acct
          return -ERRNO_CODES.ENOSYS; // unsupported features
        }
        case 54: { // ioctl
          var stream = getStreamFromFD(), op = get();
          switch (op) {
            case {{{ cDefine('TCGETS') }}}: {
              if (!stream.tty) return -ERRNO_CODES.ENOTTY;
#if SYSCALL_DEBUG
              Module.printErr('warning: not filling tio struct');
#endif
              return 0;
            }
            case {{{ cDefine('TCSETS') }}}: {
              if (!stream.tty) return -ERRNO_CODES.ENOTTY;
              return 0; // no-op, not actually adjusting terminal settings
            }
            case {{{ cDefine('TIOCGPGRP') }}}: {
              if (!stream.tty) return -ERRNO_CODES.ENOTTY;
              var argp = get();
              {{{ makeSetValue('argp', 0, 0, 'i32') }}};
              return 0;
            }
            case {{{ cDefine('TIOCSPGRP') }}}: {
              if (!stream.tty) return -ERRNO_CODES.ENOTTY;
              return -ERRNO_CODES.EINVAL; // not supported
            }
            default: abort('bad ioctl syscall ' + op);
          }
        }
        case 57: { // setpgid
          var pid = get(), pgid = get();
          if (pid && pid !== PROCINFO.pid) return -ERRNO_CODES.ESRCH;
          if (pgid && pgid !== PROCINFO.pgid) return -ERRNO_CODES.EPERM;
          return 0;
        }
        case 60: { // umask
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var mask = get();
          var old = SYSCALLS.umask;
          SYSCALLS.umask = newMask;
          return old;
        }
        case 63: { // dup2
          var old = getStreamFromFD(), suggestFD = get();
          if (old.fd === suggestFD) return suggestFD;
          return SYSCALLS.doDup(old.path, old.flags, suggestFD);
        }
        case 64: { // getppid
          return PROCINFO.ppid;
        }
        case 65: { // getpgrp
          return PROCINFO.pgid;
        }
        case 66: { // setsid
          return 0; // no-op
        }
        case 75: { // setrlimit
          return 0; // no-op
        }
        case 77: { // getrusage
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var who = get(), usage = get();
          _memset(usage, 0, {{{ C_STRUCTS.rusage.__size__ }}});
          {{{ makeSetValue('usage', C_STRUCTS.rusage.ru_utime.tv_sec, '1', 'i32') }}}; // fake some values
          {{{ makeSetValue('usage', C_STRUCTS.rusage.ru_utime.tv_usec, '2', 'i32') }}};
          {{{ makeSetValue('usage', C_STRUCTS.rusage.ru_stime.tv_sec, '3', 'i32') }}};
          {{{ makeSetValue('usage', C_STRUCTS.rusage.ru_stime.tv_usec, '4', 'i32') }}};
          return 0;
        }
        case 83: { // symlink
          var target = getStr(), linkpath = getStr();
          FS.symlink(target, linkpath);
          return 0;
        }
        case 85: { // readlink
          var path = getStr(), buf = get(), bufsize = get();
          return SYSCALLS.doReadlink(path, buf, bufsize);
        }
        case 91: { // munmap
          var addr = get(), len = get();
          // TODO: support unmmap'ing parts of allocations
          var info = SYSCALLS.mappings[addr];
          if (!info) return 0;
          if (len === info.len) {
            var stream = FS.getStream(info.fd);
            SYSCALLS.doMsync(addr, stream, len, info.flags)
            FS.munmap(stream);
            SYSCALLS.mappings[addr] = null;
            if (info.allocated) {
              _free(info.malloc);
            }
          }
          return 0;
        }
        case 94: { // fchmod
          var fd = get(), mode = get();
          FS.fchmod(fd, mode);
          return 0;
        }
        case 96: { // getpriority
          return 0;
        }
        case 97: { // setpriority
          return -ERRNO_CODES.EPERM;
        }
        case 102: { // socketcall
          var call = get(), padding = get();
          switch (call) {
            case 1: { // socket
              var domain = get(), type = get(), protocol = get();
              var sock = SOCKFS.createSocket(domain, type, protocol);
              assert(sock.stream.fd < 64); // XXX ? select() assumes socket fd values are in 0..63
              return sock.stream.fd;
            }
            case 2: { // bind
              var sock = getSocketFromFD(), addrp = get(), addrlen = get()
              var info = __read_sockaddr(addrp, addrlen);
              if (info.errno) return -info.errno;
              var port = info.port;
              var addr = DNS.lookup_addr(info.addr) || info.addr;
              sock.sock_ops.bind(sock, addr, port);
              return 0;
            }
            default: abort('unsupported socketcall syscall ' + call);
          }
        }
        case 104: { // setitimer
          return -ERRNO_CODES.ENOSYS; // unsupported feature
        }
        case 114: { // wait4
          abort('cannot wait on child processes');
        }
        case 118: { // fsync
          var stream = getStreamFromFD();
#if EMTERPRETIFY_ASYNC
          return EmterpreterAsync.handle(function(resume) {
            var mount = stream.node.mount;
            if (!mount.type.syncfs) {
              // We write directly to the file system, so there's nothing to do here.
              resume(function() { return 0 });
              return;
            }
            mount.type.syncfs(mount, false, function(err) {
              if (err) {
                resume(function() { return -ERRNO_CODES.EIO });
                return;
              }
              resume(function() { return 0 });
            });
          });
#else
          return 0; // we can't do anything synchronously; the in-memory FS is already synced to
#endif
        }
        case 121: { // setdomainname
          return -ERRNO_CODES.EPERM;
        }
        case 122: { // uname
          var buf = get();
          if (!buf) return -ERRNO_CODES.EFAULT
          var layout = {{{ JSON.stringify(C_STRUCTS.utsname) }}};
          function copyString(element, value) {
            var offset = layout[element];
            writeAsciiToMemory(value, buf + offset);
          }
          copyString('sysname', 'Emscripten');
          copyString('nodename', 'emscripten');
          copyString('release', '1.0');
          copyString('version', '#1');
          copyString('machine', 'x86-JS');
          return 0;
        }
        case 125: { // mprotect
          return 0; // let's not and say we did
        }
        case 132: { // getpgid
          var pid = get();
          if (pid && pid !== PROCINFO.pid) return -ERRNO_CODES.ESRCH;
          return PROCINFO.pgid;
        }
        case 133: { // fchdir
          var stream = getStreamFromFD();
          FS.chdir(stream.path);
          return 0;
        }
        case 140: { // llseek
          var stream = getStreamFromFD(), offset_high = get(), offset_low = get(), result = get(), whence = get();
          var offset = offset_low;
          assert(offset_high === 0);
          FS.llseek(stream, offset, whence);
          {{{ makeSetValue('result', '0', 'stream.position', 'i32') }}};
          if (stream.getdents && offset === 0 && whence === {{{ cDefine('SEEK_SET') }}}) stream.getdents = null; // reset readdir state
          return 0;
        }
        case 144: { // msync
          var addr = get(), len = get(), flags = get();
          var info = SYSCALLS.mappings[addr];
          if (!info) return 0;
          SYSCALLS.doMsync(addr, FS.getStream(info.fd), len, info.flags);
          return 0;
        }
        case 145: { // readv
          var stream = getStreamFromFD(), iov = get(), iovcnt = get();
          return SYSCALLS.doReadv(stream, iov, iovcnt);
        }
        case 146: { // writev
          var stream = getStreamFromFD(), iov = get(), iovcnt = get();
          return SYSCALLS.doWritev(stream, iov, iovcnt);
        }
        case 147: { // getsid
          var pid = get();
          if (pid && pid !== PROCINFO.pid) return -ERRNO_CODES.ESRCH;
          return PROCINFO.sid;
        }
        case 148: { // fdatasync
          var stream = getStreamFromFD();
          return 0; // we can't do anything synchronously; the in-memory FS is already synced to
        }
        case 150:   // mlock
        case 151:   // munlock
        case 152:   // mlockall
        case 153: { // munlockall
          return 0;
        }
        case 163: { // mremap
          return -ERRNO_CODES.ENOMEM; // never succeed
        }
        case 168: { // poll
          var fds = get(), nfds = get(), timeout = get();
          var DEFAULT_POLLMASK = {{{ cDefine('POLLIN') }}} | {{{ cDefine('POLLOUT') }}};
          var nonzero = 0;
          for (var i = 0; i < nfds; i++) {
            var pollfd = fds + {{{ C_STRUCTS.pollfd.__size__ }}} * i;
            var fd = {{{ makeGetValue('pollfd', C_STRUCTS.pollfd.fd, 'i32') }}};
            var events = {{{ makeGetValue('pollfd', C_STRUCTS.pollfd.events, 'i16') }}};
            var mask = {{{ cDefine('POLLNVAL') }}};
            var stream = FS.getStream(fd);
            if (stream) {
              mask = DEFAULT_POLLMASK;
              if (stream.stream_ops.poll) {
                mask = stream.stream_ops.poll(stream);
              }
            }
            mask &= events | {{{ cDefine('POLLERR') }}} | {{{ cDefine('POLLHUP') }}};
            if (mask) nonzero++;
            {{{ makeSetValue('pollfd', C_STRUCTS.pollfd.revents, 'mask', 'i16') }}};
          }
          return nonzero;
        }
        case 180: { // pread64
          var stream = getStreamFromFD(), buf = get(), count = get(), zero = getZero(), offset = get64();
          return FS.read(stream, {{{ makeGetSlabs('buf', 'i8', true) }}}, buf, count, offset);
        }
        case 181: { // pwrite64
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var stream = getStreamFromFD(), buf = get(), count = get(), zero = getZero(), offset = get64();
          return FS.write(stream, {{{ makeGetSlabs('buf', 'i8', true) }}}, buf, nbyte, offset);
        }
        case 183: { // getcwd
          var buf = get(), size = get();
          if (size === 0) return -ERRNO_CODES.EINVAL;
          var cwd = FS.cwd();
          if (size < cwd.length + 1) return -ERRNO_CODES.ERANGE;
          writeAsciiToMemory(cwd, buf);
          return buf;
        }
        case 191: { // ugetrlimit
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var resource = get(), rlim = get();
          {{{ makeSetValue('rlim', C_STRUCTS.rlimit.rlim_cur, '-1', 'i32') }}};  // RLIM_INFINITY
          {{{ makeSetValue('rlim', C_STRUCTS.rlimit.rlim_cur + 4, '-1', 'i32') }}};  // RLIM_INFINITY
          {{{ makeSetValue('rlim', C_STRUCTS.rlimit.rlim_max, '-1', 'i32') }}};  // RLIM_INFINITY
          {{{ makeSetValue('rlim', C_STRUCTS.rlimit.rlim_max + 4, '-1', 'i32') }}};  // RLIM_INFINITY
          return 0; // just report no limits
        }
        case 192: { // mmap2
          var addr = get(), len = get(), prot = get(), flags = get(), fd = get(), off = get()
          off <<= 12; // undo pgoffset
          var ptr;
          var allocated = false;
          if (fd === -1) {
            ptr = _malloc(len);
            if (!ptr) return -ERRNO_CODES.ENOMEM;
            _memset(ptr, 0, len);
            allocated = true;
          } else {
            var info = FS.getStream(fd);
            if (!info) return -ERRNO_CODES.EBADF;
            var res = FS.mmap(info, HEAPU8, addr, len, off, prot, flags);
            ptr = res.ptr;
            allocated = res.allocated;
          }
          SYSCALLS.mappings[ptr] = { malloc: ptr, len: len, allocated: allocated, fd: fd, flags: flags };
          return ptr;
        }
        case 193: { // truncate64
          var path = getStr(), zero = getZero(), length = get64();
          FS.truncate(path, length);
          return 0;
        }
        case 194: { // ftruncate64
          var fd = get(), zero = getZero(), length = get64();
          FS.ftruncate(fd, length);
          return 0;
        }
        case 195: { // SYS_stat64
          var path = getStr(), buf = get();
          return SYSCALLS.doStat(FS.stat, path, buf);
        }
        case 196: { // SYS_lstat64
          var path = getStr(), buf = get();
          return SYSCALLS.doStat(FS.lstat, path, buf);
        }
        case 197: { // SYS_fstat64
          var stream = getStreamFromFD(), buf = get();
          return SYSCALLS.doStat(FS.stat, stream.path, buf);
        }
        case 198: { // lchown32
          var path = getStr(), owner = get(), group = get();
          FS.chown(path, owner, group); // XXX we ignore the 'l' aspect, and do the same as chown
          return 0;
        }
        case 199:   // getuid32
        case 200:   // getgid32
        case 201:   // geteuid32
        case 202: { // getgid32
          return 0;
        }
        case 207: { // fchown32
          var fd = get(), owner = get(), group = get();
          FS.fchown(fd, owner, group);
          return 0;
        }
        case 212: { // chown32
          var path = getStr(), owner = get(), group = get();
          FS.chown(path, owner, group);
          return 0;
        }
        case 203:   // setreuid32
        case 204:   // setregid32
        case 213:   // setuid32
        case 214: { // setgid32
          var uid = get();
          if (uid !== 0) return -ERRNO_CODES.EPERM;
          return 0;
        }
        case 205: { // getgroups32
          var size = get(), list = get();
          if (size < 1) return -ERRNO_CODES.EINVAL;
          {{{ makeSetValue('list', '0', '0', 'i32') }}};
          return 1;
        }
        case 208:   // setresuid32
        case 210: { // setresgid32
          var ruid = get(), euid = get(), suid = get();
          if (euid !== 0) return -ERRNO_CODES.EPERM;
          return 0;
        }
        case 209:   // getresuid
        case 211: { // getresgid32
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var ruid = get(), euid = get(), suid = get();
          {{{ makeSetValue('ruid', '0', '0', 'i32') }}};
          {{{ makeSetValue('euid', '0', '0', 'i32') }}};
          {{{ makeSetValue('suid', '0', '0', 'i32') }}};
          return 0;
        }
        case 218: { // mincore
          return -ERRNO_CODES.ENOSYS; // unsupported feature
        }
        case 219: { // madvise
          return 0; // advice is welcome, but ignored
        }
        case 220: { // SYS_getdents64
          var stream = getStreamFromFD(), dirp = get(), count = get();
          if (!stream.getdents) {
            stream.getdents = FS.readdir(stream.path);
          }
          var pos = 0;
          while (stream.getdents.length > 0 && pos + {{{ C_STRUCTS.dirent.__size__ }}} < count) {
            var id;
            var type;
            var name = stream.getdents.pop();
            assert(name.length < 256); // limit of dirent struct
            if (name[0] === '.') {
              id = 1;
              type = 4; // DT_DIR
            } else {
              var child = FS.lookupNode(stream.node, name);
              id = child.id;
              type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
                     FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
                     FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
                     8;                             // DT_REG, regular file.
            }
            {{{ makeSetValue('dirp + pos', C_STRUCTS.dirent.d_ino, 'id', 'i32') }}};
            {{{ makeSetValue('dirp + pos', C_STRUCTS.dirent.d_off, 'stream.position', 'i32') }}};
            {{{ makeSetValue('dirp + pos', C_STRUCTS.dirent.d_reclen, C_STRUCTS.dirent.__size__, 'i16') }}};
            {{{ makeSetValue('dirp + pos', C_STRUCTS.dirent.d_type, 'type', 'i8') }}};
            for (var i = 0; i < name.length; i++) {
              {{{ makeSetValue('dirp + pos', C_STRUCTS.dirent.d_name + ' + i', 'name.charCodeAt(i)', 'i8') }}};
            }
            {{{ makeSetValue('dirp + pos', C_STRUCTS.dirent.d_name + ' + i', '0', 'i8') }}};
            pos += {{{ C_STRUCTS.dirent.__size__ }}};
          }
          return pos;
        }
        case 221: { // fcntl64
          var stream = getStreamFromFD(), cmd = get();
          switch (cmd) {
            case {{{ cDefine('F_DUPFD') }}}: {
              var arg = get();
              if (arg < 0) {
                return -ERRNO_CODES.EINVAL;
              }
              var newStream;
              newStream = FS.open(stream.path, stream.flags, 0, arg);
              return newStream.fd;
            }
            case {{{ cDefine('F_GETFD') }}}:
            case {{{ cDefine('F_SETFD') }}}:
              return 0;  // FD_CLOEXEC makes no sense for a single process.
            case {{{ cDefine('F_GETFL') }}}:
              return stream.flags;
            case {{{ cDefine('F_SETFL') }}}: {
              var arg = get();
              stream.flags |= arg;
              return 0;
            }
            case {{{ cDefine('F_GETLK') }}}:
            case {{{ cDefine('F_GETLK64') }}}: {
              var arg = get();
              var offset = {{{ C_STRUCTS.flock.l_type }}};
              // We're always unlocked.
              {{{ makeSetValue('arg', 'offset', cDefine('F_UNLCK'), 'i16') }}};
              return 0;
            }
            case {{{ cDefine('F_SETLK') }}}:
            case {{{ cDefine('F_SETLKW') }}}:
            case {{{ cDefine('F_SETLK64') }}}:
            case {{{ cDefine('F_SETLKW64') }}}:
              return 0; // Pretend that the locking is successful.
            case {{{ cDefine('F_GETOWN_EX') }}}:
            case {{{ cDefine('F_SETOWN') }}}:
              return -ERRNO_CODES.EINVAL; // These are for sockets. We don't have them fully implemented yet.
            case {{{ cDefine('F_GETOWN') }}}:
              // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fnctl() returns that, and we set errno ourselves.
              ___setErrNo(ERRNO_CODES.EINVAL);
              return -1;
            default: {
#if SYSCALL_DEBUG
              Module.printErr('warning: fctl64 unrecognized command ' + cmd);
#endif
              return -ERRNO_CODES.EINVAL;
            }
          }
        }
        case 265: { // clock_nanosleep
#if SYSCALL_DEBUG
          Module.printErr('warning: ignoring SYS_clock_nanosleep');
#endif
          return 0;
        }
        case 268: { // statfs64
          var path = getStr(), size = get(), buf = get();
          assert(size === {{{ C_STRUCTS.statfs.__size__ }}});
          // NOTE: None of the constants here are true. We're just returning safe and
          //       sane values.
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_bsize, '4096', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_frsize, '4096', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_blocks, '1000000', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_bfree, '500000', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_bavail, '500000', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_files, 'FS.nextInode', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_ffree, '1000000', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_fsid, '42', 'i32') }}};
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_flags, '2', 'i32') }}};  // ST_NOSUID
          {{{ makeSetValue('buf', C_STRUCTS.statfs.f_namelen, '255', 'i32') }}};
          return 0;
        }
        case 269: { // fstatfs64
          var stream = getStreamFromFD(), size = get(), buf = get();
          return ___syscall([268, 0, size, buf], 0);
        }
        case 272: { // fadvise64_64
          return 0; // your advice is important to us (but we can't use it)
        }
        case 295: { // openat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), flags = get(), mode = get();
          path = SYSCALLS.calculateAt(dirfd, path);
          return FS.open(path, flags, mode).fd;
        }
        case 296: { // mkdirat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), mode = get();
          path = SYSCALLS.calculateAt(dirfd, path);
          return SYSCALLS.doMkdir(path, mode);
        }
        case 297: { // mknodat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), mode = get(), dev = get();
          path = SYSCALLS.calculateAt(dirfd, path);
          return SYSCALLS.doMknod(path, mode, dev);
        }
        case 298: { // fchownat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), owner = get(), group = get(), flags = get();
          assert(flags === 0);
          path = SYSCALLS.calculateAt(dirfd, path);
          FS.chown(path, owner, group);
          return 0;
        }
        case 299: { // futimesat
          abort('futimesat is obsolete');
        }
        case 300: { // fstatat64
          var dirfd = get(), path = getStr(), buf = get(), flags = get();
          var nofollow = flags & {{{ cDefine('AT_SYMLINK_NOFOLLOW') }}};
          flags = flags & (~{{{ cDefine('AT_SYMLINK_NOFOLLOW') }}});
          assert(!flags, flags);
          path = SYSCALLS.calculateAt(dirfd, path);
          return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
        }
        case 301: { // unlinkat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), flags = get();
          assert(flags === 0);
          path = SYSCALLS.calculateAt(dirfd, path);
          FS.unlink(path);
          return 0;
        }
        case 302: { // renameat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var olddirfd = get(), oldpath = getStr(), newdirfd = get(), newpath = getStr();
          oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
          newpath = SYSCALLS.calculateAt(newdirfd, newpath);
          FS.rename(oldpath, newpath);
          return 0;
        }
        case 303: { // linkat
          return -ERRNO_CODES.EMLINK; // no hardlinks for us
        }
        case 304: { // symlinkat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var target = get(), newdirfd = get(), linkpath = get();
          linkpath = SYSCALLS.calculateAt(newdirfd, linkpath);
          FS.symlink(target, linkpath);
          return 0;
        }
        case 305: { // readlinkat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), buf = get(), bufsize = get();
          path = SYSCALLS.calculateAt(dirfd, path);
          return SYSCALLS.doReadlink(path, buf, bufsize);
        }
        case 306: { // fchmodat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), mode = get(), flags = get();
          assert(flags === 0);
          path = SYSCALLS.calculateAt(dirfd, path);
          FS.chmod(path, mode);
          return 0;
        }
        case 307: { // faccessat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), amode = get(), flags = get();
          assert(flags === 0);
          path = SYSCALLS.calculateAt(dirfd, path);
          return SYSCALLS.doAccess(path, amode);
        }
        case 308: { // pselect
          return -ERRNO_CODES.ENOSYS; // unsupported feature
        }
        case 320: { // utimensat
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var dirfd = get(), path = getStr(), times = get(), flags = get();
          assert(flags === 0);
          path = SYSCALLS.calculateAt(dirfd, path);
          var seconds = {{{ makeGetValue('times', C_STRUCTS.timespec.tv_sec, 'i32') }}};
          var nanoseconds = {{{ makeGetValue('times', C_STRUCTS.timespec.tv_nsec, 'i32') }}};
          var atime = (seconds*1000) + (nanoseconds/(1000*1000));
          times += {{{ C_STRUCTS.timespec.__size__ }}};
          seconds = {{{ makeGetValue('times', C_STRUCTS.timespec.tv_sec, 'i32') }}};
          nanoseconds = {{{ makeGetValue('times', C_STRUCTS.timespec.tv_nsec, 'i32') }}};
          var mtime = (seconds*1000) + (nanoseconds/(1000*1000));
          FS.utime(path, atime, mtime);
          return 0;  
        }
        case 324: { // fallocate
          var stream = getStreamFromFD(), mode = get(), offset = get64(), len = get64();
          assert(mode === 0);
          FS.allocate(stream, offset, len);
          return 0;
        }
        case 330: { // dup3
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var old = getStreamFromFD(), suggestFD = get(), flags = get();
          assert(!flags);
          if (old.fd === suggestFD) return -ERRNO_CODES.EINVAL;
          return SYSCALLS.doDup(old.path, old.flags, suggestFD);
        }
        case 331: { // pipe2
          return -ERRNO_CODES.ENOSYS; // unsupported feature
        }
        case 333: { // preadv
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var stream = getStreamFromFD(), iov = get(), iovcnt = get(), offset = get();
          return SYSCALLS.doReadv(stream, iov, iovcnt, offset);
        }
        case 334: { // pwritev
#if SYSCALL_DEBUG
          Module.printErr('warning: untested syscall');
#endif
          var stream = getStreamFromFD(), iov = get(), iovcnt = get(), offset = get();
          return SYSCALLS.doWritev(stream, iov, iovcnt, offset);
        }
        case 340: { // prlimit64
          var pid = get(), resource = get(), new_limit = get(), old_limit = get();
          if (old_limit) { // just report no limits
            {{{ makeSetValue('old_limit', C_STRUCTS.rlimit.rlim_cur, '-1', 'i32') }}};  // RLIM_INFINITY
            {{{ makeSetValue('old_limit', C_STRUCTS.rlimit.rlim_cur + 4, '-1', 'i32') }}};  // RLIM_INFINITY
            {{{ makeSetValue('old_limit', C_STRUCTS.rlimit.rlim_max, '-1', 'i32') }}};  // RLIM_INFINITY
            {{{ makeSetValue('old_limit', C_STRUCTS.rlimit.rlim_max + 4, '-1', 'i32') }}};  // RLIM_INFINITY
          }
          return 0;
        }
        default: abort('unimplemented syscall (' + which + ')');
      }
    } catch (e) {
      if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
#if SYSCALL_DEBUG
      Module.printErr('error: syscall failed with ' + e.errno + ' (' + ERRNO_MESSAGES[e.errno] + ')');
      canWarn = false;
#endif
      return -e.errno;
    }
#if SYSCALL_DEBUG
    })();
    if (ret < 0 && canWarn) { // TODO: some syscalls can return legit negative values, need to whitelist them
      Module.printErr('error: syscall may have failed with ' + (-ret) + ' (' + ERRNO_MESSAGES[-ret] + ')');
    }
    Module.printErr('syscall return: ' + ret);
    return ret;
#endif
  },

  __syscall_cp__deps: ['__syscall'],
  __syscall_cp: function() {
    var args = Array.prototype.slice.call(arguments);
    return ___syscall(args, 0);
  },
});
